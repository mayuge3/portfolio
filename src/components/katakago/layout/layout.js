import Header from '@/components/katakago/layout/header'
import Footer from '@/components/katakago/layout/footer'

import styles from './layout.module.css'

export default function Layout({ children }) {
	return (
		<div className={styles.katakago}>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}
