'use client'

import { useShoppingCart } from 'use-shopping-cart'
import { useEffect } from 'react'
import styles from '@/work01/_styles/style.module.css'

export default function Work01SuccessContent() {
  const { clearCart } = useShoppingCart()

  // このページにアクセスしたらカートを空にする処理を実行
  useEffect(() => {
    clearCart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <article className={styles.item}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.message}>
            <h1>
              ご注文
              <wbr />
              ありがとうございます
            </h1>
            <p>
              発送準備が整いましたら、
              商品発送メールをお送りさせていただきます。
              お届けまで今しばらくお待ちください。
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
