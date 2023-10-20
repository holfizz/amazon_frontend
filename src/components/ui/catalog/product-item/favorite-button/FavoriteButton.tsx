import React, { FC } from 'react'
import { useProfile } from '@/hooks/useProfile'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserService } from '@/services/user.service'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import cls from './FavoriteButton.module.scss'
import { useAuth } from '@/hooks/useAuth'

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
	const { profile } = useProfile()
	const { user } = useAuth()

	const queryClient = useQueryClient()

	const { mutate } = useMutation(
		['toggle favorite'],
		() => UserService.toggleFavorite(productId),
		{
			onSuccess() {
				queryClient.invalidateQueries(['get profile'])
			},
		},
	)

	if (!profile) return null
	if (!user) return null

	const isExists = profile.favorites.some(favorite => favorite.id === productId)

	return (
		<div>
			<button className={cls.favoriteButton} onClick={() => mutate()}>
				{isExists ? <AiFillHeart /> : <AiOutlineHeart />}
			</button>
		</div>
	)
}

export default FavoriteButton
