import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import {
  ArrowRight,
  Combine,
  Pen,
  Printer,
  Save,
  Share,
  Trash,
} from "lucide-react";

const DropdownMenuComponent = () => {
  return (
    <div className="flex flex-col gap-2">
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/dropdown-menu"
        className="font-bold underline cursor-pointer"
      >
        Dropdown Menu
      </a>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Show Dropdown Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <ArrowRight /> Open
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Printer /> Print
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Share /> Share
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Save /> Save
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Trash /> Delete
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem disabled>
            <Pen /> Edit
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Combine /> Combine
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropdownMenuComponent;
