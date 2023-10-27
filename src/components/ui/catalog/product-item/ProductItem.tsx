import { FC } from 'react'
import { IProduct } from '@/interfaces/product.interface'
import Image from 'next/image'
import ProductRating from '@/ui/catalog/product-item/product-rating/ProductRating'
import Link from 'next/link'
import { convertPrice } from '@/utlis/convertPrice'
import cls from './ProductItem.module.scss'
import AddToCartButton from '@/ui/catalog/product-item/add-to-cart-button/AddToCartButton'
import FavoriteButton from '@/ui/catalog/product-item/favorite-button/FavoriteButton'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className={cls.productCart}>
			<div className={cls.productCartImageBlock}>
				<div className={cls.productCartButtonBlock}>
					<FavoriteButton productId={product.id} />
					<AddToCartButton product={product} />
				</div>

				<Link href={`/product/${product.slug}`}>
					<Image
						src={product.images[0]}
						alt={product.name}
						width={250}
						height={250}
					/>
				</Link>
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
				<ProductRating product={product} isText />
				<div className={cls.productPrice}>{convertPrice(product.price)}</div>
			</div>
		</div>
	)
}

export default ProductItem
