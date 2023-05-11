import { CartProvider, DebugCart } from 'use-shopping-cart'

export default function Work01App({ children }) {
	return (
		// CartProviderがwork01にだけ影響するようにこのコンポーネントで管理
		<CartProvider
			mode="payment"
			cartMode="client-only"
			stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_API_KEY}
			currency="JPY"
			successUrl="http://portfolio.kata-kago.com/work01/success" // 注文完了後に飛ばすページ
			cancelUrl="http://portfolio.kata-kago.com/work01" // 注文をキャンセルしたときに飛ばすページ
		>
			{children}
		</CartProvider>
	)
}
