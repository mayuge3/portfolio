'use client'
// next/image で画像のロードが完了したらフェードインで表示する

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'
import styles from './photo.module.css'

export default function Photo({ src, alt = '', ...rest }: ImageProps) {
  const doFadeIn = () => {
    setImageHasLoaded(true)
  }
  const [imageHasLoaded, setImageHasLoaded] = useState(false)

  return (
    <div className={styles.photo}>
      <Image
        src={src}
        className={`${imageHasLoaded ? 'opacity1' : 'opacity0'}`}
        onLoad={doFadeIn}
        alt={alt}
        {...rest}
      />
    </div>
  )
}
