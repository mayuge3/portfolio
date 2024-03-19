import Stripe from 'stripe'
import { getPlaiceholder } from 'plaiceholder'
import { StaticImageData } from 'next/image'

type PriceProps = {
  id: string
  currency: string
  transform_quantity: Stripe.Price.TransformQuantity | null
  unit_amount: number | null
}

export type ProductProps = {
  id: string
  description: string | null
  name: string
  images: StaticImageData[]
  unit_label: string | null | undefined
  metadata: Stripe.Metadata
  prices: PriceProps[]
}

const getAllProducts = async () => {
  if (!process.env.STRIPE_API_KEY) {
    throw new Error('process.env.STRIPE_API_KEYを設定してください')
  }

  //  APIのバージョンに合わせて変更
  const stripe = new Stripe(process.env.STRIPE_API_KEY, {
    apiVersion: '2023-10-16',
    typescript: true,
    maxNetworkRetries: 3, // Stripe API呼び出しが失敗した時のリトライ回数を指定
  })

  const products = await stripe.products.list()
  if (!products.data || products.data.length < 1) {
    //   return res.status(200).json([])
    return
  }
  const response: ProductProps[] = await Promise.all(
    products.data.map(async (product, i) => {
      const prices = await stripe.prices.list({
        product: product.id,
      })

      const pricesSubset = prices.data.map((price) => {
        return {
          id: price.id,
          currency: price.currency,
          transform_quantity: price.transform_quantity,
          unit_amount: price.unit_amount,
        }
      })

      const imagesWithDim: StaticImageData[] = await Promise.all(
        product.images.map(async (image) => {
          const { img } = await getPlaiceholder(image)
          return img
        })
      )

      //   console.log(imagesWithDim)

      return {
        id: product.id,
        description: product.description,
        name: product.name,
        images: imagesWithDim,
        unit_label: product.unit_label,
        metadata: product.metadata,
        prices: pricesSubset,
      } satisfies ProductProps
    })
  )
  return response
}

export { getAllProducts }
