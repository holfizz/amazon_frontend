import React, { FC } from 'react'
import { EnumProductSort } from '@/interfaces/product.interface'
import cls from './SortDropDown.module.scss'
import Select from '@/ui/select/Select'
import { SORT_SELECT_DATA } from '@/app/explorer/sort/sort-select.data'
import { useFilters } from '@/app/explorer/useFilters'

const SortDropDown: FC = () => {
	const { updateQueryParams, queryParams } = useFilters()

	return (
		<div className={[cls.sortDropDown].join(' ')}>
			<Select<EnumProductSort>
				data={SORT_SELECT_DATA}
				onChange={value => updateQueryParams('sort', value.key.toString())}
				value={SORT_SELECT_DATA.find(value => value.key === queryParams.sort)}
				title={'Sort by'}
			/>
		</div>
	)
}

export default SortDropDown
