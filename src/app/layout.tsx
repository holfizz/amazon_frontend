import type { PropsWithChildren } from 'react'
import React from 'react'
import '../styles/globals.scss'
import type { Metadata } from 'next'
import { SITE_NAME } from '@/constants/seo.constants'
import { getSiteUrl } from '@/config/url.config'
import Providers from '@/providers/providers'
import Header from '@/app/Layout/Header/Header'
import Sidebar from '@/app/Layout/Sidebar/Sidebar'
import cls from './Layout/Layout.module.scss'
import { Open_Sans } from 'next/font/google'

const font = Open_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600'],
})

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
				<Providers>
					<div className={cls.Layout}>
						<Header />
						<div className={cls.sidebar}>
							<Sidebar />
							<main className={[cls.main, font.className].join(' ')}>
								{children}
							</main>
						</div>
					</div>
				</Providers>
				<div id={'modal'}></div>
			</body>
		</html>
	)
}
