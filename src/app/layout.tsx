import type { PropsWithChildren } from 'react'
import React from 'react'
import '../styles/globals.scss'
import type { Metadata } from 'next'
import { SITE_NAME } from '@/constants/seo.constants'
import { getSiteUrl } from '@/config/url.config'
import Providers from '@/providers/providers'

export const metadata: Metadata = {
	icons: {
		icon: '/favicon.svg',
	},
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	metadataBase: new URL(getSiteUrl()),
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		emails: 'my@gmail.com',
	},
}
export default function RootLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<html lang={'en'}>
			<body>
				<Providers>{children}</Providers>
				<div id={'modal'}></div>
			</body>
		</html>
	)
}
