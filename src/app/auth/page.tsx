import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import React from 'react'
import AuthPage from './Auth'

export const metadata: Metadata = {
	title: 'Auth',
	...NO_INDEX_PAGE,
}

export default function Page() {
	return <AuthPage />
}
