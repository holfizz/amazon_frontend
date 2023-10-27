'use client'
import React, { FC, useState } from 'react'
import Input from '@/ui/input/Input'
import cls from './Search.module.scss'
import { AiOutlineSearch } from 'react-icons/ai'
import { useRouter } from 'next/navigation'

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const { push } = useRouter()
	const search = () => {
		push(`/explorer?searchTerm=${searchTerm}`)
	}
	const handleKeyPress = (event: any) => {
		if (event.keyCode === 13 || event.which === 13) {
			search()
		}
	}

	return (
		<div className={cls.search}>
			<Input
				onSubmit={() => search()}
				onChange={e => setSearchTerm(e.target.value)}
				id={cls.input}
				variant={'dark'}
				onKeyPress={handleKeyPress}
			></Input>
			<div onClick={() => search()} className={cls.searchBlock}>
				<AiOutlineSearch />
			</div>
		</div>
	)
}

export default Search
