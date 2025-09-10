import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import Signup from "./components/Signup"
import Pricing from "./components/Pricing"
import MainLeft from "./Left/Main"
import MainRight from "./Right/Main"

export const page = () => {
    return (<div className="flex h-dvh flex-col">
        <div className="flex items-center justify-between w-full p-4">
            <span className="text-lg font-bold">PerfImage</span>
            <div className="flex items-center gap-4">
                <Pricing />
                <Signup />
            </div>
        </div>

        <ResizablePanelGroup
            direction="horizontal"
            className=" min-h-[200px] rounded-lg border w-full flex-1"
        >
            <ResizablePanel defaultSize={65}>
                <MainLeft />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={35} minSize={20} maxSize={60}>
                <MainRight />
            </ResizablePanel>
        </ResizablePanelGroup>
    </div>
    )
}



export default page