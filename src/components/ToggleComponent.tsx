import { Power } from "lucide-react";
import { Toggle } from "./ui/toggle";

const ToggleComponent = () => {
  return (
    <div className="flex flex-col gap-2">
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/toggle"
        className="font-bold underline cursor-pointer"
      >
        Toggle
      </a>
      <Toggle>
        <Power />
      </Toggle>
    </div>
  );
};

export default ToggleComponent;
