import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { useAtom } from 'jotai'
import { CartCountChange } from '@/lib/work01/state'
import Grid from '@/components/work01/layout/grid'
import Flex from '@/components/work01/layout/flex'
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
			<Grid rowGap="20px">
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
							{Object.entries(cartDetails).map(([priceId, detail]) => {
								return (
									<React.Fragment key={priceId}>
										<tr>
											<td>
												<Flex type="colRow" gap="10px">
													<button
														onClick={() => {
															removeItem(priceId)
															setIsCartCountChange(true)
														}}
														aria-label="商品をカートから削除"
														className={styles.itemDelete}
													></button>

													<Image src={detail.image} alt="" width="100" height="100" />
													<div className={styles.itemText}>
														<h3>{detail.name}</h3>
														<p>{detail.formattedPrice}</p>
													</div>
												</Flex>
											</td>
											<td className={styles.itemQty}>
												<Flex
													type="colRow"
													gap="20px"
													style={{
														justifyContent: 'center',
														alignItems: 'center',
													}}
												>
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
												</Flex>
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
									<td colSpan="3" style={{ textAlign: 'center' }}>
										商品が入っていません
									</td>
								</tr>
							</tbody>
						)}
					</table>
				</div>
				<Flex type="spaceBetween">
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
				</Flex>
				<button
					disabled={cartCount ? false : true}
					onClick={async () => {
						try {
							const result = await redirectToCheckout()
							if (result.error) throw new Error(result.error)
						} catch (e) {
							window.alert(e.message)
						}
					}}
					className={`${styles.orderButton} ${cartCount === 0 ? styles.disabledButton : ``}`}
				>
					ご注文手続きへ
					<span>※デモなため注文できません</span>
				</button>
			</Grid>
		</div>
	)
}
