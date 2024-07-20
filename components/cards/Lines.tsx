'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import React from 'react'
import { ResponsiveLine } from '@nivo/line'

const MyResponsiveLine = ({ data }) => (
	<ResponsiveLine
		data={data}
		margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
		xScale={{ type: 'point' }}
		yScale={{
			type: 'linear',
			min: 'auto',
			max: 'auto',
			stacked: true,
			reverse: false
		}}
		yFormat=" >-.2f"
		axisTop={null}
		axisRight={null}
		axisBottom={{
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: 'transportation',
			legendOffset: 36,
			legendPosition: 'middle',
			truncateTickAt: 0
		}}
		axisLeft={{
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: 'count',
			legendOffset: -40,
			legendPosition: 'middle',
			truncateTickAt: 0
		}}
		colors={{ scheme: 'paired' }}
		lineWidth={5}
		pointSize={8}
		pointColor={{ theme: 'background' }}
		pointBorderWidth={2}
		pointBorderColor={{ theme: 'grid.line.stroke' }}
		pointLabel="data.yFormatted"
		pointLabelYOffset={-9}
		enableTouchCrosshair={true}
		useMesh={true}
		legends={[
			{
				anchor: 'top-right',
				direction: 'column',
				justify: false,
				translateX: 100,
				translateY: 0,
				itemsSpacing: 0,
				itemDirection: 'left-to-right',
				itemWidth: 80,
				itemHeight: 20,
				itemOpacity: 0.75,
				symbolSize: 12,
				symbolShape: 'circle',
				symbolBorderColor: 'rgba(0, 0, 0, .5)',
				effects: [
					{
						on: 'hover',
						style: {
							itemBackground: 'rgba(0, 0, 0, .03)',
							itemOpacity: 1
						}
					}
				]
			}
		]}
	/>
)

export default function Lines() {
	const data = [
		{
			id: 'japan',
			color: 'hsl(69, 70%, 50%)',
			data: [
				{
					x: 'plane',
					y: 293
				},
				{
					x: 'helicopter',
					y: 98
				},
				{
					x: 'boat',
					y: 180
				},
				{
					x: 'train',
					y: 59
				},
				{
					x: 'subway',
					y: 154
				},
				{
					x: 'bus',
					y: 149
				},
				{
					x: 'car',
					y: 56
				},
				{
					x: 'moto',
					y: 5
				},
				{
					x: 'bicycle',
					y: 250
				},
				{
					x: 'horse',
					y: 143
				},
				{
					x: 'skateboard',
					y: 184
				},
				{
					x: 'others',
					y: 123
				}
			]
		},
		{
			id: 'france',
			color: 'hsl(285, 70%, 50%)',
			data: [
				{
					x: 'plane',
					y: 139
				},
				{
					x: 'helicopter',
					y: 1
				},
				{
					x: 'boat',
					y: 131
				},
				{
					x: 'train',
					y: 253
				},
				{
					x: 'subway',
					y: 131
				},
				{
					x: 'bus',
					y: 192
				},
				{
					x: 'car',
					y: 261
				},
				{
					x: 'moto',
					y: 102
				},
				{
					x: 'bicycle',
					y: 161
				},
				{
					x: 'horse',
					y: 7
				},
				{
					x: 'skateboard',
					y: 209
				},
				{
					x: 'others',
					y: 258
				}
			]
		},
		{
			id: 'us',
			color: 'hsl(289, 70%, 50%)',
			data: [
				{
					x: 'plane',
					y: 164
				},
				{
					x: 'helicopter',
					y: 94
				},
				{
					x: 'boat',
					y: 37
				},
				{
					x: 'train',
					y: 12
				},
				{
					x: 'subway',
					y: 262
				},
				{
					x: 'bus',
					y: 23
				},
				{
					x: 'car',
					y: 170
				},
				{
					x: 'moto',
					y: 280
				},
				{
					x: 'bicycle',
					y: 268
				},
				{
					x: 'horse',
					y: 182
				},
				{
					x: 'skateboard',
					y: 101
				},
				{
					x: 'others',
					y: 182
				}
			]
		},
		{
			id: 'germany',
			color: 'hsl(202, 70%, 50%)',
			data: [
				{
					x: 'plane',
					y: 9
				},
				{
					x: 'helicopter',
					y: 95
				},
				{
					x: 'boat',
					y: 5
				},
				{
					x: 'train',
					y: 189
				},
				{
					x: 'subway',
					y: 212
				},
				{
					x: 'bus',
					y: 30
				},
				{
					x: 'car',
					y: 149
				},
				{
					x: 'moto',
					y: 123
				},
				{
					x: 'bicycle',
					y: 210
				},
				{
					x: 'horse',
					y: 128
				},
				{
					x: 'skateboard',
					y: 284
				},
				{
					x: 'others',
					y: 293
				}
			]
		},
		{
			id: 'norway',
			color: 'hsl(179, 70%, 50%)',
			data: [
				{
					x: 'plane',
					y: 177
				},
				{
					x: 'helicopter',
					y: 208
				},
				{
					x: 'boat',
					y: 187
				},
				{
					x: 'train',
					y: 206
				},
				{
					x: 'subway',
					y: 156
				},
				{
					x: 'bus',
					y: 134
				},
				{
					x: 'car',
					y: 232
				},
				{
					x: 'moto',
					y: 181
				},
				{
					x: 'bicycle',
					y: 84
				},
				{
					x: 'horse',
					y: 244
				},
				{
					x: 'skateboard',
					y: 147
				},
				{
					x: 'others',
					y: 281
				}
			]
		}
	]
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>Line</CardTitle>
				<CardDescription>These are the stats of this week</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4 h-[600px] w-full">
				<MyResponsiveLine data={data} />
			</CardContent>
		</Card>
	)
}
