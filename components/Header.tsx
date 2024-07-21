'use client'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import React, { useState } from 'react'

import { BellIcon } from 'lucide-react'
import { Button } from './ui/button'
import { CommandDemo } from './Command'

const Header = () => {
	const [notifications, setNotifications] = useState([
		{
			id: 1,
			title: 'New message',
			description: 'You have a new message from a user',
			date: '2 hours ago',
			read: false
		},
		{
			id: 2,
			title: 'New message',
			description: 'You have a different message from a user',
			date: '3 days ago',
			read: true
		}
	])

	return (
		<div className="grid grid-cols-2 gap-4 border-b p-4">
			<CommandDemo />
			<div className="flex items-center justify-end">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" size="icon" className="relative">
							<span
								className={` absolute -top-3 -right-3 w-2 h-2 rounded-full mr-2 mt-2 ${
									notifications.find((x: any) => x.read === true) ? ' bg-green-500' : ' bg-gray-400'
								}`}
							/>
							<BellIcon className="w-4 h-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						{notifications.map((notification) => (
							<DropdownMenuItem key={notification.id} className="flex items-start">
								<span
									className={`w-2 h-2 rounded-full mr-2 mt-2 ${notification.read ? 'bg-gray-400' : 'bg-green-500'}`}
								/>
								<div className="flex flex-col items-start justify-center">
									<p className="font-bold">{notification.title}</p>

									<p className="text-sm text-gray-500">{notification.description}</p>
									<p className="text-xs text-gray-400">{notification.date}</p>
								</div>
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	)
}

export default Header
