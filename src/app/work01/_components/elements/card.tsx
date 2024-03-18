'use client'

import { useState, CSSProperties } from 'react'
import Link from 'next/link'
import Image, { ImageProps } from 'next/image'
import styles from './card.module.css'

type CardProps = Omit<ImageProps, 'alt'> & {
  alt?: string
  title: string
  text?: string
  href?: string
  center?: boolean
  aspectRatio?: string
  scroll?: boolean
}

export default function Card({
  title,
  text,
  src,
  href = '',
  sizes = '100vw',
  alt = '',
  center = false,
  aspectRatio = '1/1',
  scroll = true,
}: CardProps) {
  // 画像の読み込みが完了したらフェードインで表示
  const doFadeIn = () => {
    setImageHasLoaded(true)
  }
  const [imageHasLoaded, setImageHasLoaded] = useState(false)

  const cardStyle: CSSProperties = center ? { textAlign: 'center' } : {}
  const imgStyle = { aspectRatio: `${aspectRatio}` }
  return (
    <div className={styles.card} style={cardStyle}>
      <Link href={href} scroll={scroll}>
        <figure style={imgStyle}>
          <Image
            src={src}
            sizes={sizes}
            alt={alt}
            className={`${imageHasLoaded ? 'opacity1' : 'opacity0'}`}
            onLoadingComplete={doFadeIn}
          />
        </figure>
        <div className={styles.text}>
          <h3 suppressHydrationWarning>{title}</h3>
          {text && <p suppressHydrationWarning>{text}</p>}
        </div>
      </Link>
    </div>
  )
}
