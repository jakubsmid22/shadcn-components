import { Pointer } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu";

const ContextMenuComponent = () => {
  return (
    <div>
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/context-menu"
        className="font-bold underline cursor-pointer"
      >
        Context Menu
      </a>
      <ContextMenu>
        <ContextMenuTrigger className="flex gap-1 justify-center items-center border border-black rounded-md border-dashed w-96 h-40">
          Right Click <Pointer width={18} height={18} />
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Profile</ContextMenuItem>
          <ContextMenuItem>Billing</ContextMenuItem>
          <ContextMenuItem>Team</ContextMenuItem>
          <ContextMenuItem>Subscription</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
};

export default ContextMenuComponent;
