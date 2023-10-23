import React from 'react'
import Heading from '@/ui/heading/Heading'
import Link from 'next/link'
import cls from './NotFound.module.scss'

const NotFound = () => {
	return (
		<>
			<Heading fontSize={'30px'}>
				<p>Could not found requested resource</p>
				<p>
					View{' '}
					<Link className={cls.link} href={'/'}>
						all products
					</Link>
				</p>
			</Heading>
		</>
	)
}

export default NotFound
