import { FC } from 'react'
import { IconType } from 'react-icons'
import cls from './Button.module.scss'

interface ISquareButton {
	Icon: IconType
	onClick?: () => void
	number?: number
}

const SquareButton: FC<ISquareButton> = ({ Icon, onClick, number }) => {
	return (
		<div className={cls.SquareButtonBlock}>
			<button onClick={onClick} className={cls.squareButton}>
				{!!number && <span className={cls.squareButtonNumber}>{number}</span>}
				<Icon className={cls.iconSquereButton} size={21} />
			</button>
		</div>
	)
}

export default SquareButton
