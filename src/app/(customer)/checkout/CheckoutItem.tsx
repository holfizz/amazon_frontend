import Image from 'next/image'
import { FC } from 'react'

import styles from './Checkout.module.scss'
import { IProduct } from '@/interfaces/product.interface'
import { convertPrice } from '@/utlis/convertPrice'

const CheckoutItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className={styles.item}>
			<Image
				src={product.images[0]}
				width={100}
				height={100}
				alt={product.name}
			/>
			<div className={styles.row}>
				<div className={styles.information}>
					<div>{product.name}</div>
					<div>{product.category.name}</div>
				</div>
				<div className={styles.price}>{convertPrice(product.price)}</div>
			</div>
		</div>
	)
}

export default CheckoutItem
