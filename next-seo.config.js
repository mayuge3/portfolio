import { siteMeta } from '@/lib/constants'
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

// next-seo のデフォルト設定
// ※各ページの path を自動セットするために関数化
export default function useSeoConfig(path) {
	const url = `${siteUrl}${path}`

	return {
		dangerouslySetAllPagesToNoIndex: true,
		dangerouslySetAllPagesToNoFollow: true,
		titleTemplate: `%s | ${siteTitle}`,
		defaultTitle: siteTitle,
		description: siteDesc,
		canonical: url,
		openGraph: {
			url: url,
			type: siteType,
			locale: siteLocale,
			site_name: siteTitle,
			images: [
				{
					url: `${siteUrl}/ogp.png`,
					width: 1280,
					height: 640,
				},
			],
		},
		twitter: {
			cardType: `summary_large_image`,
		},
		additionalLinkTags: [
			{
				rel: 'icon',
				href: siteIcon,
			},
			{
				rel: 'apple-touch-icon',
				href: siteIcon,
			},
		],
	}
}
