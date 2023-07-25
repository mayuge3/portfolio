import Container from '@/components/katakago/layout/container'
import Link from 'next/link'
import Logo from '@/components/katakago/elements/logo'
import Photo from '@/components/katakago/elements/photo'
import Icon from '@/components/katakago/elements/icon'

import styles from '@/styles/katakago/main.module.css'

import work01Image from '@/assets/katakago/work01.png'
import work02Image from '@/assets/katakago/work02.png'
import work01Tec from '@/assets/katakago/work01-tech-with-next.png'
import work02Tec from '@/assets/katakago/work02-tech-with-next.png'
import worksMock from '@/assets/katakago/works-mock.png'
import docPdf from '@/assets/katakago/doc-pdf.png'
import docTec from '@/assets/katakago/doc-tec.png'

export default function Home() {
	return (
		<>
			<Container wide>
				<div className={styles.mainHeader}>
					<div>
						<h1 className={styles.logo}>
							<Logo />
							<span>
								<Logo type="katakago" />
								<span className="sr-only">Kata-Kago</span>
							</span>
						</h1>
						<div className={styles.logoSubText}>デザインからコーディングまで</div>
					</div>
				</div>
			</Container>

			<section className={styles.works}>
				<Container wide>
					<div className={styles.worksHeader}>
						<h2>
							<span>Productions</span>
							制作事例
						</h2>
					</div>

					<div className={styles.cards}>
						<div className={styles.card}>
							<Link href="/work01" target="_blank">
								<div className={styles.workTitle}>
									<div className={styles.workNumber}>01</div>
									<h3>ショッピング系サイト</h3>
								</div>

								<figure className={styles.workImage}>
									<div>
										<Photo src={work01Image} alt="" sizes="(min-width:1181px) 1200px, 100vw" />
									</div>
								</figure>

								<div className={styles.workDetail}>
									<figure className={styles.workTecImage}>
										<Photo
											src={work01Tec}
											alt="採用技術: CSS Modules、Stripe、Framer Motion"
											width="373"
											height="64"
										/>
									</figure>

									<p>
										オーガニック野菜の販売サイトです。「スタイリッシュでありながら親しみやすい」をコンセプトにデザインし、Stripeを使ったショッピングカートシステムを実装しています。
									</p>

									<div className={styles.button}>
										サイトを開く <Icon icon="arrowUpRight" />
									</div>
								</div>
							</Link>
						</div>

						<div className={styles.card}>
							<Link href="/work02" target="_blank">
								<div className={styles.workTitle}>
									<div className={styles.workNumber}>02</div>
									<div>
										<h3>ブランド系サイト</h3>
									</div>
								</div>

								<figure className={styles.workImage}>
									<div>
										<Photo src={work02Image} alt="" sizes="(min-width:1181px) 1200px, 100vw" />
									</div>
								</figure>

								<div className={styles.workDetail}>
									<figure className={styles.workTecImage}>
										<Photo
											src={work02Tec}
											alt="採用技術: Tailwind CSS、Framer Motion"
											width="373"
											height="64"
										/>
									</figure>

									<p>
										手作り照明のブランドサイトです。白と黒を基調に、組写真を活かしたレイアウトにしています。実装にはTailwind
										CSSとそのデザインシステムを活用しています。
									</p>

									<div className={styles.button}>
										サイトを開く <Icon icon="arrowUpRight" />
									</div>
								</div>
							</Link>
						</div>

						<div className={styles.cardWide}>
							<Link href="/works">
								<div className={styles.workTitle}>
									<div className={styles.workNumber}>99</div>
									<div>
										<h3>制作事例の詳細とこのサイトの構成について</h3>
									</div>
								</div>

								<figure className={styles.workImage99}>
									<div>
										<div className={styles.docImage01}>
											<Photo src={worksMock} alt="" sizes="(min-width:1181px) 1200px, 100vw" />
										</div>
										<div className={styles.docImage02}>
											<Photo src={docPdf} alt="" sizes="(min-width:1181px) 1200px, 100vw" />
										</div>
									</div>
								</figure>

								<div className={styles.workDetail99}>
									<figure className={styles.workTecImage}>
										<Photo
											src={docTec}
											alt="採用技術: Figma、PDF、GitHub"
											width="373"
											height="64"
										/>
									</figure>

									<p>制作事例の詳細とこのサイトの構成についてはこちらをご覧ください。</p>

									<div className={styles.button}>
										詳細を見る
										<Icon icon="arrowRight" />
									</div>
								</div>
							</Link>
						</div>
					</div>
				</Container>
			</section>
		</>
	)
}
