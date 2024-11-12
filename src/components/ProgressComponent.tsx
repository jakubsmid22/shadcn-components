import { Progress } from "./ui/progress";

const ProgressComponent = () => {
  return (
    <div>
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/progress"
        className="font-bold underline cursor-pointer"
      >
        Progress
      </a>
      <Progress className="w-48 mt-2" value={50} />
    </div>
  );
};

export default ProgressComponent;
