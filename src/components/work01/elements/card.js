import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './card.module.css'

export default function Card({
	title,
	text,
	img,
	href = '',
	sizes = '100vw',
	alt = '',
	center,
	aspectRatio = '1/1',
	scroll = true,
}) {
	// 画像の読み込みが完了したらフェードインで表示
	const doFadeIn = () => {
		setImageHasLoaded(true)
	}
	const [imageHasLoaded, setImageHasLoaded] = useState(false)

	const cardStyle = center ? { textAlign: 'center' } : {}
	const imgStyle = { aspectRatio: `${aspectRatio}` }
	return (
		<div className={styles.card} style={cardStyle}>
			<Link href={href} scroll={scroll}>
				<figure style={imgStyle}>
					<Image
						src={img}
						sizes={sizes}
						alt={alt}
						className={`${imageHasLoaded ? 'opacity1' : 'opacity0'}`}
						onLoadingComplete={doFadeIn}
					/>
				</figure>
				<div className={styles.text}>
					<h3 suppressHydrationWarning>{title}</h3>
					{text && <p suppressHydrationWarning>{text}</p>}
				</div>
			</Link>
		</div>
	)
}
