import Image from 'next/image'
import { motion } from 'framer-motion'
import VerticalText from '@/components/work02/elements/verticalText'
import Sns from '@/components/work02/elements/sns'

export default function Eyecatch({ className, img }) {
	return (
		<div className={className}>
			<div className="relative">
				<motion.figure
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ duration: 0.75, delay: 1 }}
					variants={{
						visible: { opacity: 1 },
						hidden: { opacity: 0 },
					}}
				>
					<Image
						src={img}
						alt=""
						sizes="(max-width: 767px) 767px, 100vw"
						priority
						className="mx-auto h-[450px] object-cover lg:h-[500px] lg:w-[80%]"
					/>
				</motion.figure>
				<Sns
					className="absolute right-0 top-[84px]"
					linkColor="text-gray-200 lg:text-gray-300 lg:hover:text-gray-400 hover:text-yellow-200"
				/>

				<VerticalText
					className="absolute left-0 top-full origin-top-left -rotate-90 pl-6 text-gray-500 brightness-[2.2]
					lg:left-auto lg:right-full lg:top-[188px] lg:origin-top-right lg:pl-0 lg:brightness-150"
				/>
			</div>
		</div>
	)
}
