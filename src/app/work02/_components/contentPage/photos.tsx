"use client"

import Image, { StaticImageData } from "next/image"
import { motion } from "framer-motion"

const itemStyle = [
  "col-start-1 row-start-1 row-span-2",
  "col-start-2 row-start-1",
  "col-start-2 row-start-2 row-span-3",
  "col-start-1 row-start-3 row-span-2",
]

export type PhotoItem = {
  photo: StaticImageData
  alt: string
}

type PhotosProps = {
  photos: PhotoItem[]
}

export default function Photos({ photos }: PhotosProps) {
  return (
    <motion.div
      className="not-prose my-12 grid aspect-square grid-cols-[1.2fr_2fr] grid-rows-4 gap-2"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
      transition={{ delayChildren: 0, staggerChildren: 0.2 }}
    >
      {photos.map(({ photo, alt }, i) => {
        const [start, end] =
          i === 1 ? [{ x: 100 }, { x: 0 }] : [{ y: 100 }, { y: 0 }]
        return (
          <motion.figure
            key={i}
            className={itemStyle[i]}
            variants={{
              offscreen: {
                ...start,
                opacity: 0,
              },
              onscreen: {
                ...end,
                opacity: 1,
                transition: {
                  duration: 0.75,
                  easings: ["easeInOut"],
                },
              },
            }}
          >
            <Image
              src={photo}
              alt={alt}
              sizes="(min-width: 640px) 1000px, 70vw"
              className="h-full w-full object-cover"
              placeholder="blur"
            />
          </motion.figure>
        )
      })}
    </motion.div>
  )
}
