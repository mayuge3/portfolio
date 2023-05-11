import Container from '@/components/katakago/layout/container'
import Link from 'next/link'
import Logo from '@/components/katakago/elements/logo'

import styles from './footer.module.css'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<Container wide>
				<Link href="/" className={styles.logo}>
					<Logo type="logo" />
					Portfolio.Kata-Kago.com
				</Link>
			</Container>
		</footer>
	)
}
