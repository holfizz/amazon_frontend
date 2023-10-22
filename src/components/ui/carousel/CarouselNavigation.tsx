import { FC } from 'react'
import { useActions } from '@/hooks/useActions'
import cls from './Carousel.module.scss'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

const CarouselNavigation: FC = () => {
	const { nextSlide, prevSlide } = useActions()
	return (
		<div className={cls.nav}>
			<button className={cls.buttonNavigation} onClick={() => prevSlide()}>
				<FiArrowLeft />
			</button>
			<button
				className={cls.buttonNavigation}
				onClick={() => nextSlide({ carouselLength: 2 })}
			>
				<FiArrowRight />
			</button>
		</div>
	)
}
export default CarouselNavigation
