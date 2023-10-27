'use client'
import { FC } from 'react'
import { ICarouselItem } from '@/ui/carousel/Carousel.interface'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import CarouselNavigation from '@/ui/carousel/CarouselNavigation'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import cls from './Carousel.module.scss'
import Link from 'next/link'
import Image from 'next/image'

interface ICarousel {
	items: ICarouselItem[]
	className?: string
}

const Carousel: FC<ICarousel> = ({ items, className = '' }) => {
	const { selectedItemIndex } = useTypedSelector(state => state.carousel)
	const selectedItem = items[selectedItemIndex]
	return (
		<section className={[className, cls.carousel].join(' ')}>
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
					<div className={cls.item}>
						<CarouselNavigation />

						<div className={cls.controlSlide}>
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
						<div className={cls.image}>
							{selectedItem.image && (
								<Image
									width={selectedItem.width}
									height={selectedItem.height}
									className={cls.imageSlide}
									src={selectedItem?.image}
									alt={selectedItem.title}
								></Image>
							)}
						</div>
					</div>
				</CSSTransition>
			</TransitionGroup>
		</section>
	)
}
export default Carousel
