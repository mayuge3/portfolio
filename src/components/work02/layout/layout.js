import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import Header from '@/components/work02/layout/header'
import Footer from '@/components/work02/layout/footer'
import LinkToKataKago from '@/components/katakago/elements/linkToKataKago'

// デフォルトのメタデータ（タイトル、説明、画像、アイコン）
const defaultTitle = 'LIGHT'
const defaultDescription = '木のぬくもりとやさしい灯り'
const defaultImage = {
	src: '/work02/ogp.jpg',
	width: 1280,
	height: 640,
}
const defaultIcon = '/work02/favicon.png'

// サイトURL
import { siteMeta } from '@/lib/constants'
const { siteUrl } = siteMeta

// フォント Google Fonts (Josefin Sans) の設定
import { Josefin_Sans } from 'next/font/google'

const josefin = Josefin_Sans({
	weight: ['400', '700'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'block',
	variable: '--font-josefin',
})

export default function Layout({
	seoTitle = defaultTitle,
	seoDescription = defaultDescription,
	seoImage = defaultImage,
	children,
}) {
	const { src, width, height } = seoImage
	const srcUrl = src.startsWith('https') ? src : `${siteUrl}${src}`

	// トップページの場合は「topPage」クラスを追加
	const router = useRouter()
	const topPage = router.pathname === '/work02' ? 'topPage' : ''

	return (
		<div className={`${topPage} overflow-hidden font-body text-base text-gray-900`}>
			<NextSeo
				title={seoTitle}
				description={seoDescription}
				openGraph={{
					images: [{ url: srcUrl, width, height }],
				}}
				additionalLinkTags={[
					{
						rel: 'icon',
						href: defaultIcon,
					},
					{
						rel: 'apple-touch-icon',
						href: defaultIcon,
					},
				]}
			/>

			<Header />
			<main className="relative pb-36 topPage:pb-0">
				{children}

				<div
					className="absolute bottom-0 left-0 top-[536px] hidden w-[72px] flex-col items-center 
					topPage:top-[300px] lg:flex"
				>
					<span className="h-6 w-6 rounded-full bg-primary"></span>
					<span className="w-px grow bg-primary"></span>
				</div>
			</main>
			<Footer />

			{/* Kata-Kago のトップに戻るリンクを追加 */}
			<LinkToKataKago />

			{/* Josefin Sans を使うための設定 */}
			<style jsx global>{`
				html {
					--font-josefin: ${josefin.style.fontFamily}, sans-serif;
				}
			`}</style>
		</div>
	)
}
