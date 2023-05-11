import Layout from '@/components/work02/layout/layout'
import MainVisual from '@/components/work02/topPage/mainVisual'
import Section from '@/components/work02/topPage/section'

import product from '@/assets/work02/product.jpg'
import kitchen from '@/assets/work02/kitchen.jpg'

export default function Work02Home() {
	return (
		<>
			<MainVisual />

			<Section
				title="暮らしを彩る手作りの照明"
				subtitle="Handmade Lighting"
				url="/work02/products"
				img={product}
				darkSection
				reverse
			>
				店舗やお部屋に合わせて、オリジナルの照明を作成します。ハンドメイドならではの灯りが、空間に優雅さや優しさをプラスします。特に、木を活かしたデザインや、自然にとけこむシンプルなデザインを得意としています。
			</Section>

			<Section
				title="照明のデザインから施工まで"
				subtitle="Tailored Lighting Designs"
				url="/work02/about"
				img={kitchen}
			>
				照明のデザインから施工まで担当できますので、細かなご要望に合わせた調整もおまかせください。環境や時間帯、さまざまな条件に応じた調整に対応します。空間の良さを引き出し、心地よい光で彩るお手伝いをさせていただきます。
			</Section>
		</>
	)
}

Work02Home.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}
