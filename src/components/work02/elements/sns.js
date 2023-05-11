import Link from 'next/link'
import Icon from '@/components/work02/elements/icon'

// リンクデータ
const links = [
	{ title: 'Twitter', href: '#', icon: 'twitter' },
	{ title: 'Facebook', href: '#', icon: 'facebook' },
	{ title: 'Instagram', href: '#', icon: 'instagram' },
]

export default function Sns({ className, linkColor }) {
	return (
		<div className={className}>
			<ul className="flex w-[72px] flex-col items-center gap-7 ">
				{links.map(({ title, href, icon }) => (
					<li key={icon}>
						<Link href={href} aria-label={title} className={linkColor}>
							<Icon icon={icon} />
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
