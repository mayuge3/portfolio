import styles from './container.module.css'

// 標準幅=1088px、wide=1158px
export default function Container({ wide = false, mobileFull = false, children }) {
	return (
		<div
			className={`${styles.container} ${mobileFull ? styles.mobileFull : ''} 
			${wide ? styles.wide : ''}`}
		>
			{children}
		</div>
	)
}
