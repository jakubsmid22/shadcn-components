import { Switch } from "./ui/switch";
import { Label } from "@/components/ui/label";

const SwitchComponent = () => {
  return (
    <div className="flex flex-col gap-2">
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/switch"
        className="font-bold underline cursor-pointer"
      >
        Switch
      </a>
      <div className="flex items-center gap-2">
        <Switch id="switch" />
        <Label htmlFor="switch">ON/OFF</Label>
      </div>
    </div>
  );
};

export default SwitchComponent;
