import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Reviews from '@/app/admin/reviews/Reviews'

export const metadata: Metadata = {
	title: 'Reviews',
	...NO_INDEX_PAGE,
}

export default function Page() {
	return <Reviews />
}
