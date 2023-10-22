'use client'
import React, { FC } from 'react'
import { IProduct } from '@/interfaces/product.interface'
import ProductItem from '@/ui/catalog/product-item/ProductItem'
import Heading from '@/ui/heading/Heading'
import cls from './Catalog.module.scss'
import Loader from '@/ui/loader/Loader'

interface ICatalog {
	products: IProduct[]
	isLoading?: boolean
	title?: string
}

const Catalog: FC<ICatalog> = ({ products, title, isLoading }) => {
	if (isLoading) return <Loader />
	return (
		<section>
			{title && <Heading fontSize={'24px'}>{title}</Heading>}
			<div className={cls.catalog}>
				{products.length ? (
					<>
						{products.map(products => (
							<ProductItem key={products.id} product={products} />
						))}
					</>
				) : (
					<Heading fontSize={'30px'}>There are no product</Heading>
				)}
			</div>
		</section>
	)
}

export default Catalog
