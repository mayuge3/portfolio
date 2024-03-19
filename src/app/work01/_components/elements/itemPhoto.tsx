"use client"

import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import styles from "./itemPhoto.module.css"

type ItemPhotoProps = {
  img: StaticImageData
}

export default function ItemPhoto({ img }: ItemPhotoProps) {
  const doFadeIn = () => {
    setImageHasLoaded(true)
  }
  const [imageHasLoaded, setImageHasLoaded] = useState(false)

  return (
    <figure className={styles.photo}>
      <Image
        src={img}
        alt=""
        sizes="(min-width:768px) 1088px, 100vw"
        priority
        className={`${imageHasLoaded ? "opacity1" : "opacity0"}`}
        onLoadingComplete={doFadeIn}
      />
    </figure>
  )
}
