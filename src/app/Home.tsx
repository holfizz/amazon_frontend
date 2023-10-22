'use client'

import { FC } from 'react'
import CatalogPagination from '@/ui/catalog/CatalogPagination'
import { TypePaginationProducts } from '@/interfaces/product.interface'
import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'
import Carousel from '@/ui/carousel/Carousel'
import { carouselItems } from '@/app/carousel.data'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	const { user } = useAuth()
	const { logout } = useActions()
	return (
		<>
			<Carousel items={carouselItems} />
			<CatalogPagination
				data={{ products, length }}
				title={'Hot deals 🔥'}
			></CatalogPagination>
		</>
	)
}
export default Home
