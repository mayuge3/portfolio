'use client'

import { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import { CartCountChange } from '@/app/work01/_lib/state'
import { motion, useAnimate, AnimatePresence } from 'framer-motion'
import { useShoppingCart } from 'use-shopping-cart'

import { Icon } from '@/app/work01/_components/elements/icon'
import { CartDetail } from '@/app/work01/_components/cart/cartDetail'

import styles from './cartButton.module.css'

export default function CartButton() {
  const { cartCount } = useShoppingCart()
  const [cartIsOpen, setCartIsOpen] = useState(false)
  // cartCountの変化のみglobalで管理
  const [isCartCountChange, setIsCartCountChange] = useAtom(CartCountChange)
  const [scope, animate] = useAnimate()

  useEffect(() => {
    // カートの中身があり、cartCountが変化した場合だけ、アニメーションを発火
    if (isCartCountChange && cartCount !== undefined && cartCount > 0) {
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
        {cartCount !== undefined && cartCount > 0 ? (
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
    </div>
  )
}
