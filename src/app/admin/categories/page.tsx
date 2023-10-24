import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Categories from '@/app/admin/categories/Categories'

export const metadata: Metadata = {
	title: 'Categories',
	...NO_INDEX_PAGE,
}

export default function Page() {
	return <Categories />
}
