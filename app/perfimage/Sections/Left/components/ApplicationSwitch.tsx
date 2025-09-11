import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FileUpload from "./FileUpload"

export function ApplicationSwitch() {
    return (
        <Tabs defaultValue="jpeg" >
            <TabsList>
                <TabsTrigger value="jpeg">JPEG</TabsTrigger>
                <TabsTrigger value="png" disabled>PNG</TabsTrigger>
                <TabsTrigger value="..." disabled>...</TabsTrigger>
            </TabsList>
            <TabsContent value="jpeg">
                <Card className=" w-full">
                    <CardHeader>
                        <CardTitle>JPEG</CardTitle>
                        <CardDescription>
                            JPEG compression tool allows you to reduce the file size of JPEG images while maintaining acceptable visual quality. It uses lossy compression techniques to remove redundant image data, making images faster to load and easier to share without significantly impacting appearance.
                        </CardDescription>
                    </CardHeader>
                    <Separator />
                    <CardContent className="grid gap-6">
                        <div className="grid gap-3">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Upload Images
                            </label>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <FileUpload />
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
