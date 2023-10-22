import React from 'react'
import Heading from '@/ui/heading/Heading'
import Link from 'next/link'

const NotFound = () => {
	return (
		<>
			<Heading fontSize={'30px'}>
				<p>Could not found requested resource</p>
				<p>
					View <Link href={'/'}>all products</Link>
				</p>
			</Heading>
		</>
	)
}

export default NotFound
