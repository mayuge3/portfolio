import { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import { CartCountChange } from '@/lib/work01/state'
import { motion, useAnimate, AnimatePresence } from 'framer-motion'
import { useShoppingCart } from 'use-shopping-cart'

import Icon from '@/components/work01/elements/icon'
import { CartDetail } from '@/components/work01/cart/cartDetail'

import styles from './cartButton.module.css'

export default function CartButton() {
	const { cartCount } = useShoppingCart()
	const [cartIsOpen, setCartIsOpen] = useState(false)
	// cartCountの変化のみglobalで管理
	const [isCartCountChange, setIsCartCountChange] = useAtom(CartCountChange)
	const [scope, animate] = useAnimate()

	useEffect(() => {
		// カートの中身があり、cartCountが変化した場合だけ、アニメーションを発火
		if (isCartCountChange && cartCount > 0) {
			animate(scope.current, { scale: [1, 1.5, 1] }, { duration: 0.3 })
			setIsCartCountChange(false)
		}
	})

	const toggleCart = () => {
		setCartIsOpen((prev) => !prev)
	}

	const closeCart = () => {
		setCartIsOpen(false)
	}

	return (
		<div className={cartIsOpen ? styles.open : styles.close}>
			<button onClick={toggleCart} className={styles.button}>
				{cartCount > 0 ? (
					<>
						<Icon icon="cartShoppingSolid" />
						<motion.div className={styles.count} ref={scope}>
							{cartCount}
						</motion.div>
					</>
				) : (
					<Icon icon="cartShoppingSolid" />
				)}
				<span>カート</span>
			</button>
			<AnimatePresence>
				{cartIsOpen ? (
					<>
						<motion.div
							className={styles.modal}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{
								duration: 0.3,
								easings: ['easeInOut'],
							}}
						>
							<div className={styles.modalInner}>
								<CartDetail />
							</div>

							<button onClick={closeCart} className={styles.closeButton}>
								<span className="sr-only">閉じる</span>
							</button>
						</motion.div>
						<motion.div
							className={styles.backdrop}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{
								duration: 0.3,
								easings: ['easeInOut'],
							}}
							onClick={closeCart}
						></motion.div>
					</>
				) : null}
			</AnimatePresence>
			{cartIsOpen && (
				<style jsx global>{`
					body {
						overflow: hidden;
						position: absolute;
						inset: 0;
						width: 100%;
					}

					// モーダルを開いたときにChromeでノイズが生じるのを防ぐ
					header::before {
						backdrop-filter: none;
					}
				`}</style>
			)}
		</div>
	)
}
