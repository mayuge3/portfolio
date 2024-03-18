import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { useAtom } from 'jotai'
import { CartCountChange } from '@/app/work01/_lib/state'
import Image from 'next/image'

import styles from './cartDetail.module.css'

export function CartDetail() {
  // cartCountの変化のみglobalで管理　cartの操作と合わせてこちらも設定
  const [isCartCountChange, setIsCartCountChange] = useAtom(CartCountChange)

  const {
    cartDetails,
    removeItem,
    incrementItem,
    decrementItem,
    formattedTotalPrice,
    clearCart,
    redirectToCheckout,
    cartCount,
  } = useShoppingCart()

  return (
    <div className={styles.body}>
      <div className={styles.grid}>
        <h2>ショッピングカート</h2>
        <div className={styles.item}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>商品</th>
                <th>個数</th>
                <th>小計</th>
              </tr>
            </thead>
            <tbody>
              {/* cartDetails が nullの可能性があるので修正 */}
              {cartDetails &&
                Object.entries(cartDetails).map(([priceId, detail]) => {
                  return (
                    <React.Fragment key={priceId}>
                      <tr>
                        <td>
                          <div className={styles.flexColRow}>
                            <button
                              onClick={() => {
                                removeItem(priceId)
                                setIsCartCountChange(true)
                              }}
                              aria-label="商品をカートから削除"
                              className={styles.itemDelete}
                            ></button>

                            {detail.image && (
                              <Image
                                src={detail.image}
                                alt=""
                                width="100"
                                height="100"
                              />
                            )}
                            <div className={styles.itemText}>
                              <h3>{detail.name}</h3>
                              <p>{detail.formattedPrice}</p>
                            </div>
                          </div>
                        </td>
                        <td className={styles.itemQty}>
                          <div className={styles.flexColRowCenter}>
                            <button
                              onClick={() => {
                                incrementItem(priceId)
                                setIsCartCountChange(true)
                              }}
                            >
                              +
                            </button>
                            <span>{detail.quantity}</span>
                            <button
                              onClick={() => {
                                decrementItem(priceId)
                                setIsCartCountChange(true)
                              }}
                            >
                              -
                            </button>
                          </div>
                        </td>
                        <td>{detail.formattedValue}</td>
                      </tr>
                    </React.Fragment>
                  )
                })}
            </tbody>
            {cartCount === 0 && (
              <tbody>
                <tr>
                  <td colSpan={3} style={{ textAlign: 'center' }}>
                    商品が入っていません
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
        <div className={styles.flexSpaceBetween}>
          {cartCount === 0 || (
            <button
              onClick={() => {
                clearCart()
              }}
              className={styles.clearButton}
            >
              カートを空にする
            </button>
          )}
          <div className={styles.total}>合計 {formattedTotalPrice}</div>
        </div>
        <button
          disabled={cartCount ? false : true}
          onClick={async () => {
            try {
              const result = await redirectToCheckout()
              if (result.error) throw new Error(result.error)
            } catch (e) {
              if (e instanceof Error) {
                window.alert(e.message)
              } else {
                console.error(e)
              }
            }
          }}
          className={`${styles.orderButton} ${
            cartCount === 0 ? styles.disabledButton : ``
          }`}
        >
          ご注文手続きへ
          <span>※デモなため注文できません</span>
        </button>
      </div>
    </div>
  )
}
