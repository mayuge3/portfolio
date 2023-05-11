import { useState } from 'react'
import Container from '@/components/work01/layout/container'
import Grid from '@/components/work01/layout/grid'
import Image from 'next/image'
import Button from '@/components/work01/elements/button'
import Icon from '@/components/work01/elements/icon'

import styles from './hero.module.css'

import hero from '@/assets/work01/hero.jpg'

export default function Hero({}) {
	const doFadeIn = () => {
		setImageHasLoaded(true)
	}
	const [imageHasLoaded, setImageHasLoaded] = useState(false)

	return (
		<div className={styles.hero}>
			<Image
				src={hero}
				alt=""
				sizes="(max-width: 767px) 767px, 100vw"
				priority
				className={`${imageHasLoaded ? 'opacity1' : 'opacity0'}`}
				onLoadingComplete={doFadeIn}
			/>
			<div className={styles.text}>
				<Container>
					<Grid>
						<h1>
							オーガニックを
							<br />
							楽しもう
						</h1>
						<Button text="好みの野菜を探す" href="#shop" scroll={false} />
					</Grid>
				</Container>
			</div>
			<div className={styles.wave}>
				<Icon icon="wave" />
			</div>
		</div>
	)
}
