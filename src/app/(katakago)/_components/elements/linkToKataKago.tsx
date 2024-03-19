// Kata-Kago のトップに戻るリンク
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from '@/katakago/_components/elements/logo'
import { Icon } from './icon'
import styles from './linkToKataKago.module.css'

export default function LinkToKataKago() {
  // ページロードのタイミングで見えるのを防ぐため、ページレンダリング後に表示されるように設定
  const [rendered, isRendered] = useState(false)

  useEffect(() => {
    isRendered(true)
  }, [])

  return (
    rendered && (
      <div className={styles.bar}>
        <Link href="/works" target="_blank">
          <span className={styles.arrow}>
            <Icon icon="arrowLeft" />
          </span>
          <div className={styles.text}>
            <span className={styles.logo}>
              <Logo />
            </span>
            「制作事例とサイト構成」に戻る
          </div>
        </Link>
      </div>
    )
  )
}
