import type { FC, PropsWithChildren } from 'react'
import cls from './Checkbox.module.scss'
import { BsCheck } from 'react-icons/bs'

interface ICheckbox {
	isChecked?: boolean
	onClick: () => void
	className?: string
}
const Checkbox: FC<PropsWithChildren<ICheckbox>> = ({
	isChecked,
	className,
	onClick,
	children,
}) => {
	return (
		<button className={[cls.checkbox, className].join(' ')} onClick={onClick}>
			<span className={[isChecked && cls.active].join(' ')}>
				{isChecked && <BsCheck />}
			</span>
			<span>{children}</span>
		</button>
	)
}

export default Checkbox
