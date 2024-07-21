import { BellRing, Cookie, Inbox, MessageSquareCode, Settings, User, WalletMinimal } from 'lucide-react'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator
} from './ui/command'

import React from 'react'
import UserItem from './UserItem'

const Sidebar = () => {
	const menuList = [
		{
			group: 'General',
			items: [
				{ link: '/', icon: <User />, text: 'Profile' },
				{ link: '/', icon: <Inbox />, text: 'Inbox' },
				{ link: '/', icon: <WalletMinimal />, text: 'Billing' },
				{ link: '/', icon: <BellRing />, text: 'Notification' }
			]
		},
		{
			group: 'Settings',
			items: [
				{ link: '/', icon: <Settings />, text: 'General Settings' },
				{ link: '/', icon: <Cookie />, text: 'Privacy' },
				{ link: '/', icon: <MessageSquareCode />, text: 'Logs' }
			]
		}
	]

	return (
		<div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] p-4 min-h-screen">
			<UserItem />
			<div className="grow">
				<Command className="overflow-visible">
					<CommandList className="overflow-visible">
						{menuList.map((menu, index) => (
							<CommandGroup key={index} heading={menu.group}>
								{menu.items.map((item, index) => (
									<CommandItem
										key={index}
										className="flex gap-2 cursor-pointer hover:bg-gray-200 hover:text-black transition-colors"
									>
										{item.icon}
										{item.text}
									</CommandItem>
								))}
							</CommandGroup>
						))}
					</CommandList>
				</Command>
			</div>
		</div>
	)
}

export default Sidebar
