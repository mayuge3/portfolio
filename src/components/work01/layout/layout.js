import { NextSeo } from 'next-seo'
import Header from '@/components/work01/layout/header'
import Footer from '@/components/work01/layout/footer'
import LinkToKataKago from '@/components/katakago/elements/linkToKataKago'

// デフォルトのメタデータ（タイトル、説明、画像、アイコン）
const defaultTitle = 'VEG'
const defaultDescription = 'フレッシュ野菜のガイド＆ショッピングサイト'
const defaultImage = {
	src: '/work01/ogp.jpg',
	width: 1280,
	height: 640,
}
const defaultIcon = '/work01/favicon.png'

// サイトURL
import { siteMeta } from '@/lib/constants'
const { siteUrl } = siteMeta

// ベーススタイル
import { baseStyles } from './layoutStyles'

// Font Awesome のライセンス
const fontAwesomeLicense = (
	<span
		style={{ display: 'none' }}
		dangerouslySetInnerHTML={{
			__html: `<!-- Icons on this page: ! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->`,
		}}
	/>
)

export default function Layout({
	seoTitle = defaultTitle,
	seoDescription = defaultDescription,
	seoImage = defaultImage,
	children,
}) {
	const { src, width, height } = seoImage
	const srcUrl = src.startsWith('https') ? src : `${siteUrl}${src}`

	return (
		<>
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
			<main>{children}</main>
			<Footer />

			{/* Kata-Kago のトップに戻るリンクを追加 */}
			<LinkToKataKago />

			{/* 制作事例01のベーススタイルを適用 */}
			<style jsx global>
				{baseStyles}
			</style>

			{/* Font Awesome のライセンス情報を挿入 */}
			{fontAwesomeLicense}
		</>
	)
}
