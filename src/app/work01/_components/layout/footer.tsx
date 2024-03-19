import Link from 'next/link'
import { Icon } from '@/app/work01/_components/elements/icon'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerMenu}>
          <div>
            <h3>野菜ガイド</h3>
            <ul>
              <li>
                <Link href="#">緑黄色野菜</Link>
              </li>
              <li>
                <Link href="#">くだもの</Link>
              </li>
              <li>
                <Link href="#">根菜類</Link>
              </li>
              <li>
                <Link href="#">豆類</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>体験</h3>
            <ul>
              <li>
                <Link href="#">オンラインレシピ</Link>
              </li>
              <li>
                <Link href="#">サブスク</Link>
              </li>
              <li>
                <Link href="#">ギフト</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>サポート</h3>
            <ul>
              <li>
                <Link href="#">配送について</Link>
              </li>
              <li>
                <Link href="#">送料・お届けについて</Link>
              </li>
              <li>
                <Link href="#">返品・交換について</Link>
              </li>
              <li>
                <Link href="#">お問い合わせ</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerInfo}>
          <div className={styles.footerInfoMain}>
            <div className="logo">
              <Link href="/work01" aria-label="Veg">
                <Icon icon="veg" />
              </Link>
            </div>
            <div className={styles.address}>
              〒000-0000
              <br /> 東京都住所区住所町1-11-12
              <br /> 000-1234-5678
            </div>
          </div>
          <div className={styles.footerInfoSub}>
            <ul>
              <li>
                <Link href="#">会社概要</Link>
              </li>
              <li>
                <Link href="#">プライバシーポリシー</Link>
              </li>
              <li>
                <Link href="#">サイトマップ</Link>
              </li>
            </ul>
            <div>@ VEG. All rights reserved</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
