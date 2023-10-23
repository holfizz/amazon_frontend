import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { ProductService } from '@/services/product/product.service'
import {
	ProductDataFilters,
	TypeParamsFilters,
} from '@/interfaces/product.interface'
import ProductExplorer from '@/app/explorer/ProductExplorer'

export const metadata: Metadata = {
	title: 'Explorer',
	...NO_INDEX_PAGE,
}

async function getProducts(searchParams: ProductDataFilters) {
	const data = await ProductService.getAll(searchParams)
	return data
}

export default async function Page({ searchParams }: TypeParamsFilters) {
	const data = await getProducts(searchParams)
	return <ProductExplorer initialProducts={data} />
}
