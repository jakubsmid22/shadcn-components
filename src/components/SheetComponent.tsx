import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

const SheetComponent = () => {
  return (
    <div className="flex flex-col gap-2">
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/sheet"
        className="font-bold underline cursor-pointer"
      >
        Sheet
      </a>
      <Sheet>
        <SheetTrigger asChild >
            <Button>Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
                <SheetTitle>Lorem ipsum dolor sit amet.</SheetTitle>
                <SheetDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatum, magni nisi maiores maxime soluta!</SheetDescription>
            </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SheetComponent;
