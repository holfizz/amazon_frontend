import Image from 'next/image'
import { useState } from 'react'
import cls from './ProductGallery.module.scss'

interface IProductGallery {
	images: string[]
}

export function ProductGallery({ images }: IProductGallery) {
	const [activeIndex, setActiveIndex] = useState(0)

	return (
		<div>
			<Image
				src={images[activeIndex]}
				alt=''
				width={500}
				height={500}
				className={cls.image}
				priority
				draggable={false}
			/>
			<div style={{ width: '500px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
				{images.map((image, index) => (
					<button
						key={index}
						onClick={() => setActiveIndex(index)}
						className={[
							cls.button,
							index === activeIndex && cls.buttonShadow,
							index !== activeIndex && cls.buttonBorder,
						].join(' ')}
					>
						<Image
							draggable={false}
							src={image}
							alt=''
							width={100}
							height={100}
							priority
						/>
					</button>
				))}
			</div>
		</div>
	)
}
