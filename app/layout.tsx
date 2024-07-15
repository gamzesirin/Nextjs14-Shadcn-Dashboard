import './globals.css'

import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} flex items-start justify-between `}>
				<div className=" hidden lg:flex min-w-[300px] p-4 min-h-screen">
					<Sidebar />
				</div>
				<main className="grid w-full h-full ">
					<Header />
					<div className="p-4">{children}</div>
				</main>
			</body>
		</html>
	)
}
