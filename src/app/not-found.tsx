import Link from 'next/link'
import Header from '@/katakago/_components/layout/header'
import layoutStyles from '@/katakago/_styles/layout.module.css'
import Container from '@/katakago/_components/layout/container'
import { Icon } from '@/katakago/_components/elements/icon'
import styles from '@/katakago/_styles/404.module.css'

const Page404: React.FC = () => {
  return (
    // Katakago Layout
    <div className={layoutStyles.katakago}>
      <Header />
      <main>
        <Container wide>
          <div className={styles.message}>
            <h1>404</h1>
            <p>ページが見つかりません</p>
            <Link href="/" className={styles.link}>
              <Icon icon="arrowLeft" /> トップに戻る
            </Link>
          </div>
          <div className={styles.footerLink}>
            <Link href="/">Portfolio.Kata-Kago.com</Link>
          </div>
        </Container>
      </main>
    </div>
  )
}

export default Page404
