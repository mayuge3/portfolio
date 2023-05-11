import Layout from '@/components/work01/layout/layout'
import Container from '@/components/work01/layout/container'
import Work01App from '@/components/work01/work01app'
import Grid from '@/components/work01/layout/grid'

import styles from '@/styles/work01/success.module.css'

export default function Work01Success() {
	return (
		<Layout
			seoTitle={`VEG - ご注文ありがとうございます`}
			seoDescription={`注文手続きが完了しました`}
		>
			<article className={styles.item}>
				<Container>
					<Grid>
						<div className={styles.message}>
							<h1>
								ご注文
								<wbr />
								ありがとうございます
							</h1>
							<p>
								発送準備が整いましたら、 商品発送メールをお送りさせていただきます。
								お届けまで今しばらくお待ちください。
							</p>
						</div>
					</Grid>
				</Container>
			</article>
		</Layout>
	)
}

Work01Success.getLayout = function getLayout(page) {
	return <Work01App>{page}</Work01App>
}
