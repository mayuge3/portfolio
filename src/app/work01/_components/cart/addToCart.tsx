'use client'

import { StaticImageData } from 'next/image'

import { useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { motion } from 'framer-motion'

import { useAtom } from 'jotai'
import { CartCountChange } from '@/app/work01/_lib/state'

import { Icon } from '@/app/work01/_components/elements/icon'

import styles from './addToCart.module.css'

type AddToCartProps = {
  id: string
  img: StaticImageData
  item: string
  price: number | null
  currency: string
}

export default function AddToCart({
  id,
  img,
  item,
  price,
  currency,
}: AddToCartProps) {
  const [isCartCountChange, setIsCartCountChange] = useAtom(CartCountChange)
  const [qty, setQty] = useState('1')
  const { addItem } = useShoppingCart()

  return (
    <div className={styles.cart}>
      <div className={styles.price}>
        {price}円 <span>（税込）</span>
      </div>

      <label className={styles.qty}>
        数量
        <select
          name="qty"
          value={qty}
          onChange={(event) => setQty(event.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>

      <motion.button
        whileTap={{ scale: 1.05 }}
        className={styles.button}
        onClick={() => {
          addItem(
            {
              id: id,
              name: item,
              price: price ?? 0, // 価格が設定されていないもの nullのときに0
              currency: currency,
              image: img.src, // 👈imageにはurlの文字列しか受け取れない
            },
            { count: Number(qty) }
          )
          setIsCartCountChange(true)
        }}
      >
        <Icon icon="cartShoppingSolid" />
        カートに入れる
      </motion.button>
    </div>
  )
}
