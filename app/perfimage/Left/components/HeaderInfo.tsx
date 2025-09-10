import React from 'react'
import { Separator } from "@/components/ui/separator"
import { ApplicationSwitch } from './ApplicationSwitch'

export function HeaderInfo() {
  return (
    <div className='w-full'>
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Image Compressing WebApp</h4>
        <p className="text-muted-foreground text-sm">
            Easily compress your images to reduce file size while maintaining quality.
        </p>
      </div>
      <Separator className="my-4" />
        <ApplicationSwitch />
    </div>
  )
}
