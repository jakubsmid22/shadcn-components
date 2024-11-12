import { Button } from "./ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const HoverCardComponent = () => {
  return (
    <div className="flex flex-col gap-2">
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/hover-card"
        className="font-bold underline cursor-pointer"
      >
        Hover Card
      </a>
      <HoverCard>
        <HoverCardTrigger asChild>
            <Button>Hover</Button>
        </HoverCardTrigger>
        <HoverCardContent>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quas.
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default HoverCardComponent;
