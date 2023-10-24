import Link from 'next/link'
import { FaLock } from 'react-icons/fa'
import styles from './ProductInformation.module.scss'
import { IProduct } from '@/interfaces/product.interface'
import { convertPrice } from '@/utlis/convertPrice'
import FavoriteButton from '@/ui/catalog/product-item/favorite-button/FavoriteButton'

interface IProductInformation {
	product: IProduct
}

function AddToCartInline(props: { product: IProduct }) {
	return null
}

export default function ProductInformation({ product }: IProductInformation) {
	return (
		<div className={styles.productContainer}>
			<div className={styles.priceText}>{convertPrice(product.price)}</div>
			<div className={styles.shippingInfo}>
				$6.88 Shipping{' '}
				<Link href='/' className={styles.linkText}>
					Details
				</Link>
			</div>
			<span className={styles.hintText}>Sales taxes may apple at checkout</span>
			<div className={styles.deliveryInfo}>
				<span className='opacity-50 mr-1'>Delivery</span> Thursday, June 10
			</div>
			<AddToCartInline product={product} />
			<p className={styles.secureTransaction}>
				<FaLock className='mr-2' /> Secure transaction
			</p>
			<div className={styles.favoriteButton}>
				<FavoriteButton productId={product.id} />
			</div>
		</div>
	)
}
