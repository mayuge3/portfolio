import Container from '@/components/work01/layout/container'
import Grid from '@/components/work01/layout/grid'

import styles from './section.module.css'

export default function Section({
	Tag = 'section',
	id = false,
	decoration = 'default',
	children,
}) {
	return (
		<Tag className={styles[decoration]}>
			<div id={id} className={styles.linkTarget}></div>
			<Container>
				<Grid>{children}</Grid>
			</Container>
		</Tag>
	)
}
