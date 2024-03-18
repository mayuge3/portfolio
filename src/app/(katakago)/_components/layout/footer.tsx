import Container from '@/katakago/_components/layout/container'
import Link from 'next/link'
import Logo from '@/katakago/_components/elements/logo'

import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container wide>
        <Link href="/" className={styles.logo}>
          <Logo type="logo" />
          Portfolio.Kata-Kago.com
        </Link>
      </Container>
    </footer>
  )
}
