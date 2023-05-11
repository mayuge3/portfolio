import styles from './flex.module.css'

export default function Flex({
	Tag = 'div',
	type = 'flex',
	gap = 'var(--spacing-20-36)',
	style = {},
	children,
}) {
	return (
		<Tag className={styles[type]} style={{ gap: gap, ...style }}>
			{children}
		</Tag>
	)
}
