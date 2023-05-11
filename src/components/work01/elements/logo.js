import Link from 'next/link'
import Icon from '@/components/work01/elements/icon'

export default function Logo() {
	return (
		<div className="logo">
			<Link href="/work01" aria-label="Veg">
				<Icon icon="veg" />
			</Link>
		</div>
	)
}
