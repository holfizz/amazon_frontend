import { ISelectItem } from '@/ui/select/Select.interface'
import { EnumProductSort } from '@/interfaces/product.interface'

export const SORT_SELECT_DATA: ISelectItem<EnumProductSort>[] = [
	{
		key: EnumProductSort.HIGH_PRICE,
		label: 'High price',
	},
	{
		key: EnumProductSort.LOW_PRICE,
		label: 'Low price',
	},
	{
		key: EnumProductSort.NEWEST,
		label: 'Newest',
	},
	{
		key: EnumProductSort.OLDEST,
		label: 'Oldest',
	},
]
