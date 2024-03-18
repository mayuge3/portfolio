import Link from 'next/link'
import { Icon } from '@/app/work01/_components/elements/icon'
import CartButton from '@/app/work01/_components/cart/cartButton'

import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.containerWide}>
          <div className="logo">
            <Link href="/work01" aria-label="Veg">
              <Icon icon="veg" />
            </Link>
          </div>

          <div className={styles.menu}>
            <ul>
              <li>
                <Link href="/work01">ホーム</Link>
              </li>
              <li>
                <Link href="/work01#vegetable" scroll={true}>
                  野菜案内
                </Link>
              </li>
              <li>
                <Link href="/work01#experience" scroll={true}>
                  体験
                </Link>
              </li>
              <li>
                <Link href="/work01#shop" scroll={true}>
                  商品
                </Link>
              </li>
            </ul>
            <CartButton />
          </div>
        </div>
      </nav>
    </header>
  )
}
