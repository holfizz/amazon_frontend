import React, { Dispatch, FC, HTMLAttributes, SetStateAction } from 'react'
import { EnumProductSort } from '@/interfaces/product.interface'
import cls from './SortDropDown.module.scss'

interface ISortDropDown extends HTMLAttributes<HTMLDivElement> {
	sortType: EnumProductSort
	setSortType: Dispatch<SetStateAction<EnumProductSort>>
	variable: 'light' | 'dark'
}
const SortDropDown: FC<ISortDropDown> = ({
	sortType,
	setSortType,
	variable,
	...rest
}) => {
	return (
		<div {...rest} className={[cls.sortDropDown, cls[variable]].join(' ')}>
			<select
				value={sortType}
				onChange={e => setSortType(e.target.value as any)}
			>
				{(
					Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>
				).map(key => {
					return (
						<option key={key} value={EnumProductSort[key]}>
							{EnumProductSort[key].replace(/_/g, ' ').charAt(0).toUpperCase() +
								EnumProductSort[key].replace(/_/g, ' ').slice(1)}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export default SortDropDown
