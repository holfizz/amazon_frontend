import { ISelect } from '@/ui/select/Select.interface'
import { useState } from 'react'
import cls from './Select.module.scss'
import { BsCaretDownFill } from 'react-icons/bs'

function Select<K>({ data, onChange, value, title }: ISelect) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={cls.select}>
			<button onClick={() => setIsOpen(!isOpen)}>
				{title && <b>{title}</b>}
				{value?.label || 'Default'}
				<BsCaretDownFill />
			</button>
			{isOpen && (
				<ul>
					{data.map(item => (
						<li
							key={cls.key?.toString()}
							className={[item.key === value?.key && cls.active].join(' ')}
							onClick={() => {
								onChange(item)
								setIsOpen(false)
							}}
						>
							<button disabled={item.key === value?.key}>{item.label}</button>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default Select
