import React from 'react'
import Layout from '@/ui/Layout/Layout'
import Heading from '@/ui/heading/Heading'
import Link from 'next/link'

const NotFound = () => {
	return (
		<Layout>
			<Heading fontSize={'30px'}>
				<p>Could not fund requested resource</p>
				<p>
					View <Link href={'/'}>all products</Link>
				</p>
			</Heading>
		</Layout>
	)
}

export default NotFound
