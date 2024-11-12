import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const PopoverComponent = () => {
  return (
    <div className="flex flex-col gap-2">
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/popover"
        className="font-bold underline cursor-pointer"
      >
        Popover
      </a>
      <Popover>
        <PopoverTrigger asChild><Button>Open Popover</Button></PopoverTrigger>
        <PopoverContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, laborum?</PopoverContent>
      </Popover>
    </div>
  );
};

export default PopoverComponent;
