import Layout from '@/components/work02/layout/layout'
import Entry from '@/components/work02/contentPage/entry'
import Photos from '@/components/work02/contentPage/photos'
import MoreLink from '@/components/work02/elements/moreLink'

import eyecatch from '@/assets/work02/product.jpg'
import product01 from '@/assets/work02/product01.jpg'
import product02 from '@/assets/work02/product02.jpg'
import product03 from '@/assets/work02/product03.jpg'
import product04 from '@/assets/work02/product04.jpg'

const photos = [
	{ photo: product01, alt: '' },
	{ photo: product02, alt: '' },
	{ photo: product03, alt: '' },
	{ photo: product04, alt: '' },
]

export default function Work02Products() {
	return (
		<Layout
			seoTitle="LIGHT - 暮らしを彩る手作りの照明"
			seoDescription="ハンドメイドのオリジナル照明について"
			seoImage={eyecatch}
		>
			<Entry title="暮らしを彩る手作りの照明" eyecatch={eyecatch}>
				<p>
					木を使ったやさしいデザイン、そしてインテリアや室内に合わせたシンプルなデザインの照明を手作りで制作しています。木の温かみや風合いを生かした照明器具は、空間をより心地よく落ち着いた雰囲気に変えてくれます。また、お客様のご希望に合わせて、様々な種類の木材を使用することも可能です。
				</p>
				<p>
					さらに、手作りの照明には様々な形があります。遊び心を盛り込んだものから、まわりの環境を引き立たせるもの、さりげなく光を添えるものなど、自由自在です。
				</p>

				<Photos photos={photos} />

				<p>
					ウッディタイプは木材から生まれる風合いを楽しむことができるため、自然素材を好む方に人気です。和室や北欧インテリアのお部屋にもぴったりです。
				</p>
				<p>
					モダンなデザインが魅力的なのはスチールタイプ照明です。金属素材ならではのクールな印象があり、現代的な高級感を演出します。金属素材に木材を合わせれば、モダンな空間やミニマルでクールな中にも柔らかさを加えることができます。
				</p>
				<p>
					デザインから施工まで一貫して承ります。デザインのみのご依頼も承っておりますので、お気軽にご相談ください。
				</p>

				<MoreLink href="/work02/about">照明のデザインと施工について</MoreLink>
			</Entry>
		</Layout>
	)
}

Work02Products.getLayout = function getLayout(page) {
	return <>{page}</>
}
