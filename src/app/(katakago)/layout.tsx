import Header from '@/katakago/_components/layout/header'
import Footer from '@/katakago/_components/layout/footer'

import styles from '@/katakago/_styles/layout.module.css'

type KatakagoLayoutProps = {
  children: React.ReactNode
}

export default function KatakagoLayout({ children }: KatakagoLayoutProps) {
  return (
    <div className={styles.katakago}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
