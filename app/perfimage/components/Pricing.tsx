import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"

const Pricing = () => {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Button variant="link" className=" cursor-pointer" > Pricing </Button>
            </HoverCardTrigger>
            <HoverCardContent>
                <div className=" text-sm">The pricing page is under development. Stay tuned for updates!</div>
                <div className=" text-muted-foreground text-xs">
                    Expected to added by Q4 2025.
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}

export default Pricing