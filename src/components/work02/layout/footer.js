import Link from 'next/link'
import Chat from '@/components/work02/elements/chat'

export default function Footer({}) {
	return (
		<footer className="bg-gray-900 py-20 text-white">
			<div className="container flex items-start justify-between xl:max-w-[clamp(1200px,85%,1400px)]">
				<div>
					<div className="font-josefin text-4xl font-bold uppercase">
						<Link href="/work02">Light</Link>
					</div>
					<div className="mt-8 text-xs leading-relaxed">
						〒000-0000
						<br /> 東京都住所区住所町1-11-12
						<br /> 000-1234-5678
					</div>
				</div>
				<Chat className="-mt-24 sm:mt-0" id="chat" />
			</div>
		</footer>
	)
}
