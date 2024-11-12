import { ChevronsUpDown, ListCollapse } from "lucide-react";
import { Button } from "./ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

const CollapsibleComponent = () => {
  return (
    <div>
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/collapsible"
        className="font-bold underline cursor-pointer"
      >
        Collapsible
      </a>
      <Collapsible className="w-72">
        <p>
          <span className="mr-2 font-bold">Lorem ipsum dolor sit amet.</span>
          <CollapsibleTrigger asChild>
            <Button variant="ghost">
              <ChevronsUpDown />
            </Button>
          </CollapsibleTrigger>
        </p>
        <CollapsibleContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
          delectus hic quibusdam velit neque dolores?
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default CollapsibleComponent;
