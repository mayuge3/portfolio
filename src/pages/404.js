import { NextSeo } from 'next-seo'
import Container from '@/components/katakago/layout/container'
import Link from 'next/link'
import Icon from '@/components/katakago/elements/icon'

import styles from '@/styles/katakago/404.module.css'

Container

export default function Page404() {
	return (
		<Container wide>
			<NextSeo title="404" description="ページが見つかりません" />

			<div className={styles.message}>
				<h1>404</h1>
				<p>ページが見つかりません</p>
				<Link href="/" className={styles.link}>
					<Icon icon="arrowLeft" /> トップに戻る
				</Link>
			</div>
			<div className={styles.footerLink}>
				<Link href="/">Portfolio.Kata-Kago.com</Link>
			</div>

			<style jsx global>{`
				footer {
					display: none;
				}
			`}</style>
		</Container>
	)
}
