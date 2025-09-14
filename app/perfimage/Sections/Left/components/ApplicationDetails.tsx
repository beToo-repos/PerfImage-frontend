import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const ApplicationDetails = () => {
  return (
    <Card>

      <CardHeader>
        <CardTitle>JPEG</CardTitle>
        <CardDescription>
          JPEG compression tool allows you to reduce the file size of JPEG images while maintaining acceptable visual quality. It uses lossy compression techniques to remove redundant image data, making images faster to load and easier to share without significantly impacting appearance.
        </CardDescription>
      </CardHeader>

    </Card>
  )
}

export default ApplicationDetails