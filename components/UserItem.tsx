import React from 'react'

const UserItem = () => {
	return (
		<div className="flex items-center justify-start gap-2">
			<div className="avatar rounded-full min-h-12 min-w-12 bg-emerald-500 text-white font-[700] flex items-center justify-center">
				<p>GŞ</p>
			</div>
			<div>
				<p className="font-bold">Gamze Şirin</p>
				<p>gamze@gmail.com</p>
			</div>
		</div>
	)
}

export default UserItem
