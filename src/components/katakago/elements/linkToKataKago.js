import Link from 'next/link'
import Logo from '@/components/katakago/elements/logo'
import Icon from '@/components/katakago/elements/icon'
import styles from './linkToKataKago.module.css'

export default function LinkToKataKago() {
	return (
		<div className={styles.bar}>
			<Link href="/" target="_blank">
				<span className={styles.arrow}>
					<Icon icon="arrowLeft" />
				</span>
				<div className={styles.text}>
					<span className={styles.logo}>
						<Logo />
					</span>
					Kata-Kago トップに戻る
				</div>
			</Link>
		</div>
	)
}
