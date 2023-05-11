import styles from './container.module.css'

// default=1024px、wide=1280px
export default function Container({ children, wide = false }) {
	return <div className={wide ? styles.wide : styles.default}>{children}</div>
}
