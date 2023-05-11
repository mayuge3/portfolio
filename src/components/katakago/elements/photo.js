// next/image で画像のロードが完了したらフェードインで表示する

import { useState } from 'react'
import Image from 'next/image'
import styles from './photo.module.css'

export default function Photo({ alt = '', ...rest }) {
	const doFadeIn = () => {
		setImageHasLoaded(true)
	}
	const [imageHasLoaded, setImageHasLoaded] = useState(false)

	return (
		<div className={styles.photo}>
			<Image
				className={`${imageHasLoaded ? 'opacity1' : 'opacity0'}`}
				onLoadingComplete={doFadeIn}
				alt={alt}
				{...rest}
			/>
		</div>
	)
}
