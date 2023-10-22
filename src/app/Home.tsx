'use client'

import { FC } from 'react'
import CatalogPagination from '@/ui/catalog/CatalogPagination'
import { TypePaginationProducts } from '@/interfaces/product.interface'
import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	const { user } = useAuth()
	const { logout } = useActions()
	return (
		<>
			<div>
				<CatalogPagination
					data={{ products, length }}
					title={'Hot deals 🔥'}
				></CatalogPagination>
			</div>
		</>
	)
}
export default Home
