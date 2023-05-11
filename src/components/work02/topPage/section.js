import Image from 'next/image'
import { motion } from 'framer-motion'
import MoreLink from '@/components/work02/elements/moreLink'

export default function Section({
	title,
	subtitle,
	url,
	img,
	children,
	darkSection = false,
	reverse = false,
}) {
	return (
		<section
			className={`${darkSection ? `darkSection` : ``} ${reverse ? `reverse` : ``}
				relative py-32 darkSection:bg-gray-900 darkSection:text-white lg:z-10 xl:z-auto`}
		>
			<div
				className="container relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 
					xl:max-w-6xl xl:gap-28 2xl:max-w-7xl"
			>
				{/* 画像 */}
				<div className="relative">
					<motion.figure
						variants={{
							offscreen: {
								y: 100,
								opacity: 0,
							},
							onscreen: {
								y: 0,
								opacity: 1,
								transition: {
									duration: 0.5,
									easings: ['easeInOut'],
								},
							},
						}}
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0 }}
					>
						<Image
							src={img}
							alt=""
							sizes="(max-width: 767px) 100vw, 50vw"
							priority
							className="aspect-[1.12/1] object-cover"
							placeholder="blur"
						/>
					</motion.figure>

					{/* 画像左下の装飾ボックス（ダークセクションでは非表示） */}
					<div
						className="absolute -bottom-6 -left-5 -z-10 h-[50%] w-[45%] 
							bg-primary/60 darkSection:hidden
							sm:-bottom-7 
							sm:-left-7 
							lg:-bottom-32
							lg:-left-[calc(50vw-100%-20px)]
							lg:w-[calc(50vw-100%-20px+20%)]
							lg:min-w-[200px]
						"
					></div>
				</div>

				{/* テキスト */}
				<div className="reverse:lg:order-first">
					<h2 className="mt-[10%] text-2xl font-bold md:text-4xl">{title}</h2>
					<p className="mt-2 font-josefin text-xl text-gray-500 darkSection:text-gray-400">
						{subtitle}
					</p>
					<p className="mt-10 leading-relaxed">{children}</p>
					<MoreLink href={url}>詳しく見る</MoreLink>
				</div>

				{/* 小さい装飾ボックス */}
				<div
					className="absolute right-5 top-0 aspect-square w-6 bg-primary 
						reverse:left-5 reverse:right-auto"
				></div>
			</div>
		</section>
	)
}
