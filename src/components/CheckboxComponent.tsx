import { Checkbox } from "./ui/checkbox";

const CheckboxComponent = () => {
  return (
    <div className="flex flex-col gap-2">
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/checkbox"
        className="font-bold underline cursor-pointer"
      >
        Checkbox
      </a>
      <div className="flex items-center gap-1">
        <Checkbox id="default" />
        <label htmlFor="default" className="text-[15px]">
          Default
        </label>
      </div>
      <div className="flex items-center gap-1">
        <Checkbox id="disabled" disabled />
        <label htmlFor="disabled" className="text-[15px]">
          Disabled
        </label>
      </div>
    </div>
  );
};

export default CheckboxComponent;
