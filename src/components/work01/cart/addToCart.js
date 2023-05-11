import { useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { motion } from 'framer-motion'

import { useAtom } from 'jotai'
import { CartCountChange } from '@/lib/work01/state'

import Icon from '@/components/work01/elements/icon'

import styles from './addToCart.module.css'

export default function AddToCart({ id, img, item, price, currency }) {
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
				<select name="qty" value={qty} onChange={(event) => setQty(event.target.value)}>
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
							price: price,
							currency: currency,
							image: img,
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
