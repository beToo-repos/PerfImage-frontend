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
            </TabsList>
            <TabsContent value="jpeg">
                <Card className=" w-full">
                    
                    <CardContent className="grid gap-6">
                        <div className="grid gap-3">
                            <label className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Upload Images
                            </label>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <FileUpload />
                    </CardFooter>

                    <Separator />
                </Card>
            </TabsContent>
        </Tabs>
    )
}
