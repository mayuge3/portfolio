import Link from 'next/link'
import Container from '@/components/work01/layout/container'
import Flex from '@/components/work01/layout/flex'
import Logo from '@/components/work01/elements/logo'
import CartButton from '@/components/work01/cart/cartButton'

import styles from './header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.navbar}>
				<Container wide>
					<Flex type="colSpaceBetween" gap="var(--spacing-10-36)">
						<Logo />

						<div className={styles.menu}>
							<Flex type="spaceBetween">
								<Flex Tag="ul">
									<li>
										<Link href="/work01">ホーム</Link>
									</li>
									<li>
										<Link href="/work01#vegetable" scroll={false}>
											野菜案内
										</Link>
									</li>
									<li>
										<Link href="/work01#experience" scroll={false}>
											体験
										</Link>
									</li>
									<li>
										<Link href="/work01#shop" scroll={false}>
											商品
										</Link>
									</li>
								</Flex>
								<CartButton />
							</Flex>
						</div>
					</Flex>
				</Container>
			</nav>
		</header>
	)
}
