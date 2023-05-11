import Link from 'next/link'

import styles from './button.module.css'

export default function Button({ text = 'ボタン', href = '', center = false, scroll = true }) {
	const buttonAlign = center
		? {
				justifySelf: 'center',
				marginInline: 'auto',
		  }
		: {}
	return (
		<Link href={href} className={styles.button} style={buttonAlign} scroll={scroll}>
			{text}
		</Link>
	)
}
