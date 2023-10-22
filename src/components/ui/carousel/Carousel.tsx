'use client'
import { FC } from 'react'
import { ICarouselItem } from '@/ui/carousel/Carousel.interface'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import CarouselNavigation from '@/ui/carousel/CarouselNavigation'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import cls from './Carousel.module.scss'
import Link from 'next/link'

interface ICarousel {
	items: ICarouselItem[]
	className?: string
}

const Carousel: FC<ICarousel> = ({ items, className = '' }) => {
	const { selectedItemIndex } = useTypedSelector(state => state.carousel)
	const selectedItem = items[selectedItemIndex]
	return (
		<section className={[className, cls.carousel].join(' ')}>
			<CarouselNavigation />
			<TransitionGroup key={selectedItem.title} className={[].join(' ')}>
				<CSSTransition
					timeout={500}
					classNames={{
						enter: cls.itemEnter,
						enterActive: cls.itemEnterActive,
						exit: cls.itemExit,
						exitActive: cls.itemExitActive,
					}}
					unmountOnExit
					mountOnEnter
				>
					<div
						className={cls.item}
						style={
							selectedItem.image
								? { backgroundImage: `url(${selectedItem.image})` }
								: {}
						}
					>
						<h2>{selectedItem.title}</h2>
						<p>{selectedItem.description}</p>

						{selectedItem.link ? (
							<Link className={cls.carouselLink} href={selectedItem.link}>
								Read more
							</Link>
						) : (
							<Link className={cls.carouselLink} href={'/explorer'}>
								Browse Product
							</Link>
						)}
					</div>
				</CSSTransition>
			</TransitionGroup>
		</section>
	)
}
export default Carousel
