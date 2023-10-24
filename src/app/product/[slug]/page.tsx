import { Metadata } from 'next'

import { ProductService } from '@/services/product/product.service'
import { IPageSlugParam, TypeParamSlug } from '@/interfaces/page-params'
import Product from '@/app/product/[slug]/Product/Product'

export const revalidate = 60

export async function generateStaticParams() {
	const response = await ProductService.getAll()

	const paths = response.products.map(product => ({
		slug: product.slug,
	}))
	console.log(paths)
	return paths
}

async function getProduct(params: TypeParamSlug) {
	const product = await ProductService.getBySlug(params?.slug as string)
	console.log(product)

	const { data: similarProducts } = await ProductService.getSimilar(9)

	return {
		product,
		similarProducts,
	}
}

export async function generateMetadata({
	params,
}: IPageSlugParam): Promise<Metadata> {
	const { product } = await getProduct(params)

	return {
		title: product.name,
		description: product.description,
		category: product.category.name,
		openGraph: {
			images: product?.images || [],
			description: product.description,
		},
	}
}

export default async function ProductPage({ params }: IPageSlugParam) {
	const { product, similarProducts } = await getProduct(params)

	return (
		<Product
			initialProduct={product}
			similarProducts={similarProducts}
			slug={params.slug}
		/>
	)
}
