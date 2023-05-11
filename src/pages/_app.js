import '@/styles/base.css'
import { DefaultSeo } from 'next-seo'
import useSeoConfig from '../../next-seo.config'
import Layout from '@/components/katakago/layout/layout'
import localFont from 'next/font/local'

// フォント Noto Sans JP (subset-min) の設定
// https://github.com/ixkaito/NotoSansJP-subset
const noto = localFont({
	src: [
		{
			path: '../assets/fonts/NotoSansJP-Regular.woff2',
			weight: '400',
			style: 'normal',
			display: 'block',
		},
		{
			path: '../assets/fonts/NotoSansJP-Medium.woff2',
			weight: '500',
			style: 'normal',
			display: 'block',
		},
		{
			path: '../assets/fonts/NotoSansJP-Bold.woff2',
			weight: '700',
			style: 'normal',
			display: 'block',
		},
	],
	variable: '--font-noto',
})

// フォント Cascadia Code (variable) の設定
// https://github.com/microsoft/cascadia-code
const code = localFont({
	src: [
		{
			path: '../assets/fonts/CascadiaCode.woff2',
			weight: '100-700',
			style: 'normal',
			display: 'block',
		},
	],
	variable: '--font-code',
})

export default function App({ Component, pageProps, router }) {
	// ページの path を取得して next-seo のデフォルト設定にセット
	const seoConfig = useSeoConfig(router.asPath)

	// 制作事例以外のページでは katakago の layoutコンポーネントを使用
	const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

	return (
		<>
			{/* next-seo のデフォルト設定 */}
			<DefaultSeo {...seoConfig} />

			{/* フォントの設定 */}
			<style jsx global>{`
				html {
					--font-code: ${code.style.fontFamily};
					--font-noto: ${noto.style.fontFamily}, sans-serif;
					font-family: ${noto.style.fontFamily}, sans-serif;
				}
			`}</style>

			{/* ページコンポーネント */}
			{getLayout(<Component {...pageProps} />)}
		</>
	)
}
