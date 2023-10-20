import React, { FC } from 'react'
import { IProduct } from '@/interfaces/product.interface'
import Image from 'next/image'
import ProductRating from '@/ui/catalog/product-item/product-rating/ProductRating'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { convertPrice } from '@/utlis/convertPrice'
import cls from './ProductItem.module.scss'
import AddToCartButton from '@/ui/catalog/product-item/add-to-cart-button/AddToCartButton'

const DynamicFavoriteButton = dynamic(
	() => import('./favorite-button/FavoriteButton'),
	{
		ssr: false,
	},
)
const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className={cls.productCart}>
			<div className={cls.productCartImageBlock}>
				<div className={cls.productCartButtonBlock}>
					<DynamicFavoriteButton productId={product.id} />
					<AddToCartButton product={product} />
				</div>

				<Image
					src={product.images[0]}
					alt={product.name}
					width={250}
					height={250}
				/>
			</div>
			<div className={cls.productInf}>
				<Link className={cls.productCartName} href={`/product/${product.slug}`}>
					{product.name}
				</Link>
				<Link
					className={cls.productCartCategory}
					href={`/category/${product.category.slug}`}
				>
					{product.category.name}
				</Link>
				<ProductRating product={product} />
				<div className={cls.productPrice}>{convertPrice(product.price)}</div>
			</div>
		</div>
	)
}

export default ProductItem
