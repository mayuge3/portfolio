'use client'

import { useState } from 'react'

import Image from 'next/image'
import Button from '@/app/work01/_components/elements/button'
import { Icon } from '@/app/work01/_components/elements/icon'

import styles from './hero.module.css'

import hero from '@/work01/_assets/hero.jpg'

export default function Hero() {
  const doFadeIn = () => {
    setImageHasLoaded(true)
  }
  const [imageHasLoaded, setImageHasLoaded] = useState(false)

  return (
    <div className={styles.hero}>
      <Image
        src={hero}
        alt=""
        sizes="(max-width: 767px) 767px, 100vw"
        priority
        className={`${imageHasLoaded ? 'opacity1' : 'opacity0'}`}
        onLoadingComplete={doFadeIn}
      />
      <div className={styles.text}>
        <div className={styles.container}>
          <h1>
            オーガニックを
            <br />
            楽しもう
          </h1>
          <Button text="好みの野菜を探す" href="#shop" scroll={true} />
        </div>
      </div>
      <div className={styles.wave}>
        <Icon icon="wave" />
      </div>
    </div>
  )
}
