import Link from 'next/link'
import Container from '@/components/work01/layout/container'
import Flex from '@/components/work01/layout/flex'
import Grid from '@/components/work01/layout/grid'
import Logo from '@/components/work01/elements/logo'

import styles from './footer.module.css'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<Container>
				<Flex type="col" gap="var(--spacing-72-90)">
					<div className={styles.footerMenu}>
						<Grid itemsPerRow="2-4" rowGap="var(--spacing-45)">
							<Flex type="col" gap="var(--spacing-24)">
								<h3>野菜ガイド</h3>
								<Flex Tag="ul" type="col" gap="var(--spacing-7)">
									<li>
										<Link href="#">緑黄色野菜</Link>
									</li>
									<li>
										<Link href="#">くだもの</Link>
									</li>
									<li>
										<Link href="#">根菜類</Link>
									</li>
									<li>
										<Link href="#">豆類</Link>
									</li>
								</Flex>
							</Flex>
							<Flex type="col" gap="var(--spacing-24)">
								<h3>体験</h3>
								<Flex Tag="ul" type="col" gap="var(--spacing-7)">
									<li>
										<Link href="#">オンラインレシピ</Link>
									</li>
									<li>
										<Link href="#">サブスク</Link>
									</li>
									<li>
										<Link href="#">ギフト</Link>
									</li>
								</Flex>
							</Flex>
							<Flex
								type="col"
								gap="var(--spacing-24)"
								style={{ gridColumn: 'span 3' }}
							>
								<h3>サポート</h3>
								<Flex Tag="ul" type="col" gap="var(--spacing-7)">
									<li>
										<Link href="#">配送について</Link>
									</li>
									<li>
										<Link href="#">送料・お届けについて</Link>
									</li>
									<li>
										<Link href="#">返品・交換について</Link>
									</li>
									<li>
										<Link href="#">お問い合わせ</Link>
									</li>
								</Flex>
							</Flex>
						</Grid>
					</div>
					<div className={styles.footerInfo}>
						<Flex
							type="colSpaceBetween"
							gap="var(--spacing-30)"
							style={{ alignItems: 'normal' }}
						>
							<Flex type="col" gap="var(--spacing-14)">
								<Logo />
								<div className={styles.address}>
									〒000-0000
									<br /> 東京都住所区住所町1-11-12
									<br /> 000-1234-5678
								</div>
							</Flex>
							<Flex
								type="col"
								gap="var(--spacing-20)"
								style={{ justifyContent: 'flex-end' }}
							>
								<Flex Tag="ul" gap="var(--spacing-20-28)">
									<li>
										<Link href="#">会社概要</Link>
									</li>
									<li>
										<Link href="#">プライバシーポリシー</Link>
									</li>
									<li>
										<Link href="#">サイトマップ</Link>
									</li>
								</Flex>
								<div>@ VEG. All rights reserved</div>
							</Flex>
						</Flex>
					</div>
				</Flex>
			</Container>
		</footer>
	)
}
