'use client'

import { FC } from 'react'
import Layout from '@/ui/Layout/Layout'
import CatalogPagination from '@/ui/catalog/CatalogPagination'
import { TypePaginationProducts } from '@/interfaces/product.interface'
import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	const { user } = useAuth()
	const { logout } = useActions()
	return (
		<Layout>
			<div>
				<CatalogPagination
					data={{ products, length }}
					title={'Hot deals 🔥'}
				></CatalogPagination>
			</div>
		</Layout>
	)
}
export default Home
