import { FC, useEffect, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import cls from './Range.module.scss'

interface IRange {
	min?: number
	max?: number
	fromInitialValue?: string
	toInitialValue?: string
	onChangeFromValue: (key: string) => void
	onChangeToValue: (key: string) => void
}

const Range: FC<IRange> = ({
	min = 0,
	max,
	fromInitialValue,
	toInitialValue,
	onChangeToValue,
	onChangeFromValue,
}) => {
	const [fromValue, setFromValue] = useState(fromInitialValue || '')
	const [toValue, setToValue] = useState(toInitialValue || '')

	const debouncedFromValue = useDebounce(fromValue, 500)
	const debouncedToValue = useDebounce(toValue, 500)

	useEffect(() => {
		onChangeFromValue(debouncedFromValue)
	}, [debouncedFromValue])

	useEffect(() => {
		onChangeToValue(debouncedToValue)
	}, [debouncedToValue])

	return (
		<div className={cls.range}>
			<input
				min={min}
				max={max}
				type='number'
				placeholder='From'
				value={fromValue}
				onChange={e => setFromValue(e.target.value)}
			/>
			{' - '}
			<input
				min={min}
				max={max}
				type='number'
				placeholder='To'
				value={toValue}
				onChange={e => setToValue(e.target.value)}
			/>
		</div>
	)
}
export default Range
