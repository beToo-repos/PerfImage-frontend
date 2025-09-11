import React from 'react'
import { HeaderInfo } from './components/HeaderInfo'
import { Separator } from '@/components/ui/separator'
import { ApplicationSwitch } from './components/ApplicationSwitch'

const MainLeft = () => {
    return (
        <div className="flex flex-col h-full w-full p-6">
            <HeaderInfo />
            <Separator className="my-4" />
            <ApplicationSwitch />
        </div>
    )
}

export default MainLeft