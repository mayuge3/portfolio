import { useState } from 'react'
import Image from 'next/image'
import styles from './itemPhoto.module.css'

export default function ItemPhoto({ img }) {
	const doFadeIn = () => {
		setImageHasLoaded(true)
	}
	const [imageHasLoaded, setImageHasLoaded] = useState(false)

	return (
		<figure className={styles.photo}>
			<Image
				src={img}
				alt=""
				sizes="(min-width:768px) 1088px, 100vw"
				priority
				className={`${imageHasLoaded ? 'opacity1' : 'opacity0'}`}
				onLoadingComplete={doFadeIn}
			/>
		</figure>
	)
}
