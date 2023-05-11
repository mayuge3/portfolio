import Image from 'next/image'
import { motion } from 'framer-motion'
import Sns from '@/components/work02/elements/sns'
import VerticalText from '@/components/work02/elements/verticalText'

import main01 from '@/assets/work02/main01.jpg'
import main02 from '@/assets/work02/main02.jpg'
import main03 from '@/assets/work02/main03.jpg'
import main04 from '@/assets/work02/main04.jpg'

// 組写真のアニメーション
function PhotoContainer({ children, ...rest }) {
	return (
		<motion.div
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0 }}
			transition={{ delayChildren: 1, staggerChildren: 0.2 }}
			{...rest}
		>
			{children}
		</motion.div>
	)
}

function Photo({ alt = '', sizes = '100vw', left = false, ...rest }) {
	// leftの有無で動きの切り替え
	const [start, end] = left ? [{ x: -100 }, { x: 0 }] : [{ y: 100 }, { y: 0 }]

	// 上の値を使ってAnimationの設定
	const variants = {
		offscreen: {
			...start,
			opacity: 0,
		},
		onscreen: {
			...end,
			opacity: 1,
			transition: {
				duration: 0.75,
				easings: ['easeInOut'],
			},
		},
	}

	return (
		<motion.div variants={variants}>
			<Image alt={alt} sizes={sizes} {...rest} placeholder="blur" />
		</motion.div>
	)
}

export default function MainVisual({}) {
	return (
		<PhotoContainer
			className="relative grid grid-cols-[25px_1fr_19vw] gap-2 pb-24 sm:pb-32
				lg:grid-cols-[min(9.8vw,146px)_1.26fr_1fr]"
		>
			<figure className="col-span-2 col-start-1 lg:col-span-1 lg:col-start-2">
				<Photo
					src={main01}
					left
					priority
					className="aspect-[1.65/1] object-cover"
					sizes="(min-width: 1024px) 70vw, 100vw"
				/>
			</figure>
			<div
				className="col-span-2 col-start-2 grid grid-cols-2 gap-2 lg:col-span-1 lg:col-start-3 lg:row-span-2
					lg:grid-cols-[1fr_min(8.75vw,126px)] lg:content-center"
			>
				<figure className="aspect-[1/1.5] lg:aspect-auto">
					<Photo
						src={main02}
						priority
						className="aspect-[1/1] object-cover"
						sizes="(min-width: 1024px) 40vw, 60vw"
					/>
				</figure>
				<figure className="self-end lg:col-span-2 lg:col-start-1">
					<Photo
						src={main03}
						priority
						className="aspect-[1/1] object-cover lg:aspect-[2/1]"
						sizes="(min-width: 1024px) 50vw, 100vw"
					/>
				</figure>
			</div>
			<figure className="center col-start-2 w-2/3 justify-self-center lg:justify-self-end">
				<Photo
					src={main04}
					priority
					className="aspect-[1/1.25] object-cover"
					sizes="(min-width: 1024px) 40vw, 60vw"
				/>
			</figure>

			<Sns
				className="absolute right-0 top-0 mt-16 sm:mt-20 lg:-mt-36"
				linkColor="text-gray-300 hover:text-gray-400 "
			/>

			<VerticalText
				className="absolute left-0 top-full origin-top-left -rotate-90 pl-16 text-gray-500 brightness-150
					sm:pl-24 lg:-top-10 lg:left-auto lg:right-full lg:origin-top-right lg:pl-0"
			/>
		</PhotoContainer>
	)
}
