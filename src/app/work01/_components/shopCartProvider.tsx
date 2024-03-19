"use client"

import { CartProvider, DebugCart } from "use-shopping-cart"

type ShopCartProvider = {
  children: React.ReactNode
}

export default function ShopCartProvider({ children }: ShopCartProvider) {
  if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_API_KEY) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_API_KEYを設定してください")
  }
  return (
    // CartProviderがwork01にだけ影響するようにこのコンポーネントで管理
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_API_KEY as string}
      currency="JPY"
      successUrl="http://portfolio.kata-kago.com/work01/success" // 注文完了後に飛ばすページ
      cancelUrl="http://portfolio.kata-kago.com/work01" // 注文をキャンセルしたときに飛ばすページ
      shouldPersist={true}
    >
      {children}
    </CartProvider>
  )
}
