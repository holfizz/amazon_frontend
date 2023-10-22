'use client'
import React, { FC, useState } from 'react'
import Input from '@/ui/input/Input'
import cls from './Search.module.scss'
import SortDropDown from '@/ui/catalog/sort-drop-down/SortDropDown'
import { EnumProductSort } from '@/interfaces/product.interface'
import { AiOutlineSearch } from 'react-icons/ai'
import { useRouter } from 'next/navigation'

const Search: FC = () => {
	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST,
	)
	const [searchTerm, setSearchTerm] = useState<string>('')
	const { push } = useRouter()

	const search = () => {
		push(`/explorer?searchTerm=${searchTerm}`)
	}
	return (
		<div className={cls.search}>
			<Input
				onChange={e => setSearchTerm(e.target.value)}
				id={cls.input}
				variant={'dark'}
			></Input>
			<SortDropDown
				style={{ borderLeft: 'none', borderRight: 'none' }}
				sortType={sortType}
				setSortType={setSortType}
				variable={'dark'}
			></SortDropDown>
			<div onClick={() => search()} className={cls.searchBlock}>
				<AiOutlineSearch />
			</div>
		</div>
	)
}

export default Search
