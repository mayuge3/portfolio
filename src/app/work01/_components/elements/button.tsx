import Link from 'next/link'
import styles from './button.module.css'

type ButtonProps = {
  text?: string
  href?: string
  scroll?: boolean
}

export default function Button({
  text = 'ボタン',
  href = '',
  scroll = true,
}: ButtonProps) {
  return (
    <Link href={href} className={styles.button} scroll={scroll}>
      {text}
    </Link>
  )
}
