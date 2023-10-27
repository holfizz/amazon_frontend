import { FC } from 'react'
import { FiMinus, FiPlus, FiTrash } from 'react-icons/fi'
import { useCart } from '@/hooks/useCart'
import { ICartItem } from '@/interfaces/cart.interface'
import { useActions } from '@/hooks/useActions'
import cls from './CartActions.module.scss'

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const { removeFromCart, changeQuantity } = useActions()

	const { items } = useCart()
	const quantity = items.find(cartItem => cartItem.id === item.id)?.quantity

	return (
		<div className={cls.cartActions}>
			<div className={cls.cartActionsButtons}>
				<button
					className={[
						cls.cartActionsButton,
						Number(quantity) <= 1 ? cls.cartActionsButtonDisabled : null,
					].join(' ')}
					onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
					disabled={quantity === 1}
				>
					<FiMinus />
				</button>

				<input
					disabled
					readOnly
					value={quantity}
					className={cls.cartActionsInput}
				/>

				<button onClick={() => changeQuantity({ id: item.id, type: 'plus' })}>
					<FiPlus />
				</button>

				<button
					className={cls.cartActionsButton}
					onClick={() => removeFromCart({ id: item.id })}
				>
					<FiTrash />
				</button>
			</div>
		</div>
	)
}

export default CartActions
