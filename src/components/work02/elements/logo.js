import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Logo({ className }) {
	return (
		<motion.div
			className={className}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ duration: 0.5, delayChildren: 0.4 }}
			variants={{
				visible: { opacity: 1 },
				hidden: { opacity: 0 },
			}}
		>
			<h1
				className="font-josefin text-[80px] font-bold uppercase leading-none text-gray-900 transition-all duration-[0.75s] ease-in-out
					topPage:sm:text-9xl topPage:lg:text-[228px]"
			>
				<Link href="/work02">Light</Link>
			</h1>
			<p
				className="ml-[0.5em] leading-none 
					topPage:sm:-mt-4 topPage:sm:ml-[0.7em] topPage:lg:text-[28px]"
			>
				<motion.span
					variants={{
						visible: { opacity: 1 },
						hidden: { opacity: 0 },
					}}
				>
					木のぬくもりとやさしい灯り
				</motion.span>
			</p>
		</motion.div>
	)
}
