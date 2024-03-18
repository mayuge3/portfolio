import styles from "./container.module.css"

type ContainerProps = {
  children?: React.ReactNode
  wide?: boolean
}

// default=1024px、wide=1280px
export default function Container({ children, wide = false }: ContainerProps) {
  return <div className={wide ? styles.wide : styles.default}>{children}</div>
}
