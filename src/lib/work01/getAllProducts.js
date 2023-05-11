import Stripe from 'stripe'
import { getPlaiceholder } from 'plaiceholder'

export async function getAllProducts() {
	const stripe = new Stripe(process.env.STRIPE_API_KEY, {
		maxNetworkRetries: 3, // Stripe API呼び出しが失敗した時のリトライ回数を指定
	})
	const products = await stripe.products.list()
	if (!products.data || products.data.length < 1) {
		return res.status(200).json([])
	}
	const response = await Promise.all(
		products.data.map(async (product, i) => {
			const prices = await stripe.prices.list({
				product: product.id,
			})
			const imagesWithDim = await Promise.all(
				product.images.map(async (image) => {
					const { img } = await getPlaiceholder(image)
					return img
				})
			)

			return {
				id: product.id,
				description: product.description,
				name: product.name,
				// images: product.images,
				images: imagesWithDim,
				unit_label: product.unit_label,
				metadata: product.metadata,
				prices: prices.data.map((price) => {
					return {
						id: price.id,
						currency: price.currency,
						transform_quantity: price.transform_quantity,
						unit_amount: price.unit_amount,
					}
				}),
			}
		})
	)
	return response
}
