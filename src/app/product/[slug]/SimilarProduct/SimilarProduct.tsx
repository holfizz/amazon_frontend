import ProductItem from '@/ui/catalog/product-item/ProductItem'
import { IProduct } from '@/interfaces/product.interface'
import Heading from '@/ui/heading/Heading'
import cls from './SimilarProduct.module.scss'

interface ISimilarProducts {
	similarProducts: IProduct[]
}

export default function SimilarProducts({ similarProducts }: ISimilarProducts) {
	return (
		<div className='mt-20'>
			<Heading fontSize={'24px'}>Similar products:</Heading>
			{similarProducts.length ? (
				<div className={cls.products}>
					{similarProducts.map(product => (
						<ProductItem key={product.id} product={product} />
					))}
				</div>
			) : (
				<div>There are no products</div>
			)}
		</div>
	)
}
