import Layout from '@/components/work01/layout/layout'
import Grid from '@/components/work01/layout/grid'
import Section from '@/components/work01/topPage/section'
import Hero from '@/components/work01/topPage/hero'
import Card from '@/components/work01/elements/card'
import Button from '@/components/work01/elements/button'
import Work01App from '@/components/work01/work01app'

import { getAllProducts } from '@/lib/work01/getAllProducts'

import yasai01 from '@/assets/work01/yasai01.svg'
import yasai02 from '@/assets/work01/yasai02.svg'
import yasai03 from '@/assets/work01/yasai03.svg'
import yasai04 from '@/assets/work01/yasai04.svg'
import plate01 from '@/assets/work01/plate01.jpg'
import plate02 from '@/assets/work01/plate02.jpg'
import plate03 from '@/assets/work01/plate03.jpg'

export default function Work01Home({ products }) {
	return (
		<Layout>
			<Hero />

			<Section id="vegetable" decoration="clover">
				<h2>フレッシュ野菜でおいしく、楽しく、健康に</h2>
				<p>
					新鮮でみずみずしい野菜は彩り豊かで美味しいもの！
					鮮度抜群なフレッシュ野菜で、健康的な生活を楽しんでください。
				</p>
				<Grid itemsPerRow="2-4">
					<Card title="朝採り・新鮮" img={yasai01} href="#" center scroll={false} />
					<Card title="天然の旨みと風味" img={yasai02} href="#" center scroll={false} />
					<Card title="みずみずしい甘さ" img={yasai03} href="#" center scroll={false} />
					<Card title="栄養価もばつぐん" img={yasai04} href="#" center scroll={false} />
				</Grid>
			</Section>

			<Section id="experience" decoration="box">
				<h2>身近なところで体験しよう</h2>
				<p>
					忙しい毎日でも、野菜はおいしく手軽に楽しめます。便利なサブスクや、人気のギフトもご利用ください。
				</p>
				<Grid itemsPerRow="2-3">
					<Card
						title="オンライン講座"
						img={plate01}
						href="#"
						scroll={false}
						sizes="(min-width:768px) 640px, 100vw"
					/>
					<Card
						title="サブスク"
						img={plate02}
						href="#"
						scroll={false}
						sizes="(min-width:768px) 640px, 50vw"
					/>
					<Card
						title="ギフト"
						img={plate03}
						href="#"
						scroll={false}
						sizes="(min-width:768px) 640px, 50vw"
					/>
				</Grid>
			</Section>

			<Section id="shop" decoration="frame">
				<h2>おいしい野菜をお届け</h2>
				<p>
					オンラインショップにはたくさんの野菜が並んでいます。こちらは、そんな中でも人気の野菜たち。１つからでもお届けします。
				</p>
				<Grid itemsPerRow="2">
					{products.slice(0, 4).map((item) => {
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
				<Button text="もっと見る" href="#" center scroll={false} />
			</Section>
		</Layout>
	)
}

Work01Home.getLayout = function getLayout(page) {
	return <Work01App>{page}</Work01App>
}

export async function getStaticProps(context) {
	const products = await getAllProducts()

	return {
		// Passed to the page component as props
		props: { products: products },
	}
}
