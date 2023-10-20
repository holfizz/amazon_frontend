'use client'

import Heading from '@/ui/heading/Heading'
import Catalog from '@/ui/catalog/Catalog'
import Layout from '@/ui/Layout/Layout'
import { useAuth } from '@/hooks/useAuth'
import { useProfile } from '@/hooks/useProfile'

interface IFavorites {}

export default function Favorites({}: IFavorites) {
	const { user } = useAuth()
	const { profile } = useProfile()
	return (
		<Layout>
			{!user ? (
				<Heading fontSize={'30px'}>
					Please register or log in to your account
				</Heading>
			) : (
				<Catalog
					products={profile?.favorites || []}
					title={'Favorites'}
				></Catalog>
			)}
		</Layout>
	)
}
