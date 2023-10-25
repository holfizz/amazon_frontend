'use client'

import { useQuery } from '@tanstack/react-query'

import { ProductService } from '@/services/product/product.service'

import styles from './Product.module.scss'
import { ProductGallery } from '@/app/product/[slug]/ProductGallery/ProductGallery'
import { IProduct } from '@/interfaces/product.interface'
import Heading from '@/ui/heading/Heading'
import SimilarProducts from '@/app/product/[slug]/SimilarProduct/SimilarProduct'
import ProductReviewsCount from '@/app/product/[slug]/ProductReviewsCount'
import ProductInformation from '@/app/product/[slug]/product-information/ProductInformation'
import ProductReviews from '@/app/product/[slug]/product-reviews/ProductReviews'

interface IProductPage {
	initialProduct: IProduct
	similarProducts: IProduct[]
	slug?: string
}

export default function Product({
	initialProduct,
	similarProducts,
	slug = '',
}: IProductPage) {
	const { data: product } = useQuery(
		['get product', initialProduct.id],
		() => ProductService.getBySlug(slug),
		{
			initialData: initialProduct,
			enabled: !!slug,
		},
	)
	return (
		<div className={styles['product-page']}>
			<Heading fontSize={'24px'} className={styles['product-heading']}>
				{product.name}
			</Heading>
			<ProductReviewsCount product={product} />
			<div className={styles['grid']}>
				<ProductGallery images={product.images} />
				<div className={styles['product-description']}>
					<div className={styles['description-title']}>Description:</div>
					<div className={styles['description-content']}>
						{product.description}
					</div>
				</div>
				<ProductInformation product={product} />
			</div>
			<SimilarProducts similarProducts={similarProducts} />
			<ProductReviews reviews={product.reviews} productId={product.id} />
		</div>
	)
}
