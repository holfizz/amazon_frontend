import React, { FC, useState } from 'react'
import {
	EnumProductSort,
	TypePaginationProducts,
} from '@/interfaces/product.interface'
import ProductItem from '@/ui/catalog/product-item/ProductItem'
import Loader from '@/ui/loader/Loader'
import Heading from '@/ui/heading/Heading'
import cls from './Catalog.module.scss'
import SortDropDown from '@/ui/catalog/sort-drop-down/SortDropDown'
import Button from '@/ui/button/Button'
import { useQuery } from '@tanstack/react-query'
import { ProductService } from '@/services/product/product.service'

interface ICatalogPagination {
	data: TypePaginationProducts
	title?: string
}

const CatalogPagination: FC<ICatalogPagination> = ({ data, title }) => {
	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST,
	)
	const [page, setPage] = useState(1)
	const { data: response, isLoading } = useQuery(
		['products', sortType, page],
		() =>
			ProductService.getAll({
				page,
				perPage: 4,
				sort: sortType,
			}),
		{
			initialData: data,
		},
	)
	if (isLoading) return <Loader />
	return (
		<section className={cls.sectionCatalog}>
			{title && <Heading fontSize={'24px'}>{title}</Heading>}
			<SortDropDown
				variable={'light'}
				sortType={sortType}
				setSortType={setSortType}
			/>
			<div className={cls.catalog}>
				{response.length ? (
					<>
						{response.products.map(products => (
							<ProductItem key={products.id} product={products} />
						))}
					</>
				) : (
					<Heading fontSize={'30px'}>There are no product</Heading>
				)}
			</div>
			<div className={cls.BlockLoadMoreButton}>
				{Array.from({ length: Math.ceil(response.length / 4) }).map(
					(_, index) => {
						const pageNumber = index + 1
						return (
							<Button
								id={[cls.LoadMoreButton].join(' ')}
								variant={page === pageNumber ? 'light' : 'white'}
								onClick={() => setPage(pageNumber)}
							>
								{pageNumber}
							</Button>
						)
					},
				)}
			</div>
		</section>
	)
}

export default CatalogPagination
