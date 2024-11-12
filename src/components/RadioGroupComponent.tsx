import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const RadioGroupComponent = () => {
  return (
    <div>
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/radio-group"
        className="font-bold underline cursor-pointer"
      >
        Radio Group
      </a>
      <RadioGroup defaultValue="option-one">
        <div className="flex gap-2 items-center">
          <RadioGroupItem value="option-1" id="option-1" />
          <label htmlFor="option-1">Option 1</label>
        </div>
        <div className="flex gap-2 items-center">
          <RadioGroupItem value="option-2" id="option-2" />
          <label htmlFor="option-2">Option 2</label>
        </div>
        <div className="flex gap-2 items-center">
          <RadioGroupItem value="option-3" id="option-3" />
          <label htmlFor="option-3">Option 3</label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default RadioGroupComponent;
