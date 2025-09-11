import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import Signup from "./components/Signup"
import Pricing from "./components/Pricing"
import MainLeft from "./Sections/Left/Main"
import MainRight from "./Sections/Right/Main"
import { Navigator } from "./components/Navigator"

export const metadata = {
  title: "PerfImage | Optimize Your Images Effortlessly",
  description: "PerfImage helps you optimize and serve images in the most efficient formats, enhancing your website's performance and user experience.",
  keywords: ["compress", "compress jpeg" ,"compress image", "image optimization", "image compressor"],
  authors: [{ name: "BeToo", url: "https://BeToo.co.in" }],
  creator: "BeToo",
};

export const page = () => {
    return (<>    
    <div className="flex h-dvh flex-col">
        <div className="flex items-center border-b justify-between w-full p-4">
            <span className="text-lg font-bold">PerfImage</span>
            <div className="flex items-center gap-4">
                <Pricing />
                <Signup />
            </div>
        </div>
        <div className="p-6 ">
            <Navigator />
        </div>
        <ResizablePanelGroup
            direction="horizontal"
            className=" min-h-[200px] rounded-lg w-full flex-1"
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
    </>
    
    
    )
}



export default page