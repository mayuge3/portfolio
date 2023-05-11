import Layout from '@/components/work01/layout/layout'
import Container from '@/components/work01/layout/container'
import Grid from '@/components/work01/layout/grid'
import ItemPhoto from '@/components/work01/elements/itemPhoto'
import Card from '@/components/work01/elements/card'
import Section from '@/components/work01/topPage/section'
import Icon from '@/components/work01/elements/icon'
import AddToCart from '@/components/work01/cart/addToCart'
import Work01App from '@/components/work01/work01app'

import { getAllProducts } from '@/lib/work01/getAllProducts'
import { shuffle } from '@/lib/work01/shuffleArray'

import styles from '@/styles/work01/item.module.css'

export default function Work01Item({ product, products }) {
	const { id, name, prices, description, metadata, images } = product
	const { handlingPack, handlingStock, handlingTips, slug } = metadata
	const { id: priceid, unit_amount: price, currency } = prices[0]
	const img = images[0]

	const suggestedProducts = shuffle(products.filter((item) => item.metadata.slug !== slug))

	return (
		<Layout seoTitle={`VEG - ${name}`} seoDescription={`${name}の商品ページ`} seoImage={img}>
			<article className={styles.item}>
				<Container mobileFull>
					<ItemPhoto key={`photo${slug}`} img={img} />
				</Container>
				<div className={styles.itemBody}>
					<Container>
						<Grid itemsPerRow="2cols">
							<div className={styles.itemText}>
								<h1>{name}</h1>
								<p>{description}</p>

								<ul className={styles.handling}>
									<li>
										<Icon icon="utensilsSolid" />
										<h2>おいしい食べ方</h2>
										<p>{handlingTips}</p>
									</li>
									<li>
										<Icon icon="temperatureLowSolid" />
										<h2>保管方法</h2>
										<p>{handlingStock}</p>
									</li>
									<li>
										<Icon icon="boxesPackingSolid" />
										<h2>パッケージ</h2>
										<p>{handlingPack}</p>
									</li>
								</ul>
							</div>
							<AddToCart img={img} item={name} id={priceid} price={price} currency={currency} />
						</Grid>
					</Container>
				</div>
			</article>

			<Section id="shop" decoration="frame">
				<h2>こちらもおすすめ</h2>

				<Grid itemsPerRow="2">
					{suggestedProducts.slice(0, 2).map((item) => {
						const {
							name,
							prices,
							images,
							metadata: { slug },
						} = item
						const price = prices[0].unit_amount
						const img = images[0]
						return (
							<Card
								key={slug}
								title={name}
								text={`￥${price}`}
								img={img}
								href={`/work01/${slug}`}
								aspectRatio="443/260"
								sizes="(min-width:768px) 1088px, 100vw"
							/>
						)
					})}
				</Grid>
			</Section>
		</Layout>
	)
}

Work01Item.getLayout = function getLayout(page) {
	return <Work01App>{page}</Work01App>
}

export async function getStaticPaths() {
	const products = await getAllProducts()

	const params = products.map((item) => {
		return {
			params: { slug: item.metadata.slug },
		}
	})
	return {
		paths: params,
		fallback: false,
	}
}

export async function getStaticProps(context) {
	const {
		params: { slug },
	} = context

	const products = await getAllProducts()
	const product = products.find((item) => item.metadata.slug === slug)

	return {
		// Passed to the page component as props
		props: { product: product, products: products },
	}
}
