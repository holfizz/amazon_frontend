import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Products from '@/app/admin/products/Products'

export const metadata: Metadata = {
	title: 'Products',
	...NO_INDEX_PAGE,
}

export default function Page() {
	return <Products />
}
