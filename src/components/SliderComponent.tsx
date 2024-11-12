import { Slider } from "./ui/slider";

const SliderComponent = () => {
  return (
    <div className="flex flex-col gap-2">
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/slider"
        className="font-bold underline cursor-pointer"
      >
        Slider
      </a>
      <Slider className="w-96" defaultValue={[50]} max={100} step={1} />
    </div>
  );
};

export default SliderComponent;
