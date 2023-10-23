'use client'
import React, { FC, useState } from 'react'
import Input from '@/ui/input/Input'
import cls from './Search.module.scss'
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
			<div onClick={() => search()} className={cls.searchBlock}>
				<AiOutlineSearch />
			</div>
		</div>
	)
}

export default Search
