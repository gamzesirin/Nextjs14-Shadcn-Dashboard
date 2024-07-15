import './globals.css'

import Calender from '@/components/cards/Calender'
import { Card } from '@/components/ui/card'
import { DataTableDemo } from '@/components/cards/DataTable'
import General from '@/components/cards/General'
import Lines from '@/components/cards/Lines'
import TableDemo from '@/components/cards/Table'

export default function Home() {
	return (
		<div className="grid gap-8">
			<div className="grid grid-cols-2 gap-8">
				<General />
				<div className="grid gap-8">
					<Calender />
				</div>
			</div>
			<div className="grid grid-cols-2 gap-8">
				<Lines />
				<div className="grid gap-4">
					<Card className="h-[350px] overflow-y-scroll scrollbar">
						<TableDemo />
					</Card>
					<Card className="h-[350px] overflow-y-scroll scrollbar">
						<DataTableDemo />
					</Card>
				</div>
			</div>
		</div>
	)
}
