'use client'
import React, { FC, useState } from 'react'
import cls from './ProductExplorer.module.scss'
import { TypePaginationProducts } from '@/interfaces/product.interface'
import { useFilters } from '@/app/explorer/useFilters'
import { useQuery } from '@tanstack/react-query'
import { ProductService } from '@/services/product/product.service'
import Heading from '@/ui/heading/Heading'
import Button from '@/ui/button/Button'
import Catalog from '@/ui/catalog/Catalog'
import Pagination from '@/app/explorer/pagination/Pagination'
import SortDropDown from '@/app/explorer/sort/SortDropDown'
import Filters from '@/app/explorer/filters/Filters'

interface IProductExplorer {
	initialProducts: TypePaginationProducts
}

const ProductExplorer: FC<IProductExplorer> = ({ initialProducts }) => {
	const [isFilterOpen, setIsFilterOpen] = useState<boolean>()

	const { isFilterUpdated, queryParams, updateQueryParams } = useFilters()
	const { data, isFetching } = useQuery(
		['product explorer', queryParams],
		() => ProductService.getAll(queryParams),
		{
			initialData: initialProducts,
			enabled: isFilterUpdated,
		},
	)
	return (
		<>
			<div>
				<Heading fontSize={'24px'}>
					{queryParams.searchTerm
						? `Search by query "${queryParams.searchTerm}"`
						: 'Explorer'}
				</Heading>
				<SortDropDown />
			</div>

			<div className={cls.buttonBlock}>
				<Button
					variant={'white'}
					onClick={() => setIsFilterOpen(!isFilterOpen)}
				>
					{isFilterOpen ? 'Close Filters' : 'Open Filters'}
				</Button>
			</div>
			<div
				className={[cls.explorer, isFilterOpen && cls.filterOpened].join(' ')}
			>
				<aside>
					<Filters />
				</aside>
				<section>
					<Catalog products={data.products} isLoading={isFetching} />
					<Pagination
						changePage={page => updateQueryParams('page', page.toString())}
						currentPage={queryParams.page}
						numberPages={Math.ceil(data.length / +queryParams.perPage)}
					/>
				</section>
			</div>
		</>
	)
}

export default ProductExplorer
