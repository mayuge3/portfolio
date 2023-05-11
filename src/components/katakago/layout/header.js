import Container from '@/components/katakago/layout/container'
import Link from 'next/link'
import Logo from '@/components/katakago/elements/logo'

import styles from './header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<Container wide>
				<nav>
					<Link href="/" className={styles.logo} aria-label="Kata-Kago">
						<Logo type="logo" />
					</Link>
				</nav>
			</Container>
		</header>
	)
}
