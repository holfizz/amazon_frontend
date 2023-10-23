import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Dashboard from '@/app/admin/Dashboard/Dashboard'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function Page() {
	return <Dashboard />
}
