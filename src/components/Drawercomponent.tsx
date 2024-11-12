import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

const Drawercomponent = () => {
  return (
    <div className="flex flex-col gap-2">
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/drawer"
        className="font-bold underline cursor-pointer"
      >
        Drawer
      </a>
      <Drawer>
        <DrawerTrigger asChild>
          <Button>Show Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Lorem ipsum dolor sit amet.</DrawerTitle>
            <DrawerDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              qui sit, in reiciendis magni quod.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <div className="flex gap-5">
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="destructive">Cancel</Button>
              </DrawerClose>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Drawercomponent;
