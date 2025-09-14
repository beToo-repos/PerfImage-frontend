import React from 'react'
import { HeaderInfo } from './components/HeaderInfo'
import { Separator } from '@/components/ui/separator'
import { ApplicationSwitch } from './components/ApplicationSwitch'
import ApplicationDetails from './components/ApplicationDetails'

const MainLeft = () => {
	return (
		<div className="flex flex-col h-full w-full p-6 gap-4">
			<HeaderInfo />
			<Separator className="my-4" />
			<ApplicationSwitch />
			<ApplicationDetails />
		</div>
	)
}

export default MainLeft