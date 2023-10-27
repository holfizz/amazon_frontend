'use client'

import React, { FC } from 'react'
import { TypePaginationProducts } from '@/interfaces/product.interface'
import Carousel from '@/ui/carousel/Carousel'
import { carouselItems } from '@/app/carousel.data'
import Catalog from '@/ui/catalog/Catalog'
import cls from './Home.module.scss'
import Button from '@/ui/button/Button'
import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link'

const Home: FC<TypePaginationProducts> = ({ products }) => {
	return (
		<>
			<Carousel items={carouselItems} />
			<Catalog title='Freshed products' products={products} />
			<Link href={'/explorer'} className={cls.explorerButton}>
				<Button variant={'dark'}>
					More Products
					<BsArrowDownRight />
				</Button>
			</Link>
		</>
	)
}
export default Home
