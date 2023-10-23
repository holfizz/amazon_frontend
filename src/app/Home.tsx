'use client'

import React, { FC } from 'react'
import { TypePaginationProducts } from '@/interfaces/product.interface'
import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'
import Carousel from '@/ui/carousel/Carousel'
import { carouselItems } from '@/app/carousel.data'
import Catalog from '@/ui/catalog/Catalog'

const Home: FC<TypePaginationProducts> = ({ products }) => {
	const { user } = useAuth()
	const { logout } = useActions()
	return (
		<>
			<Carousel items={carouselItems} />
			<Catalog title='Freshed products' products={products} />
		</>
	)
}
export default Home
