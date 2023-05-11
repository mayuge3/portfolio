import styles from './grid.module.css'

export default function Grid({
	Tag = 'div',
	itemsPerRow = '',
	rowGap = 'var(--spacing-36)',
	children,
}) {
	return (
		<Tag className={styles[`grid${itemsPerRow}`]} style={{ rowGap: rowGap }}>
			{children}
		</Tag>
	)
}
