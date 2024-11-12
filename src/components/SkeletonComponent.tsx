import { Skeleton } from "./ui/skeleton";

const SkeletonComponent = () => {
  return (
    <div className="flex flex-col gap-2">
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/skeleton"
        className="font-bold underline cursor-pointer"
      >
        Skeleton
      </a>
      <div className="flex gap-2 bg-black p-2 rounded-md">
        <Skeleton className="w-[30px] h-[30px] rounded-full" />
        <div className="space-y-2">
          <Skeleton className="w-[200px] h-[30px] rounded-full" />
          <div className="space-y-1">
            <Skeleton className="w-[100px] h-[5px] rounded-full" />
            <Skeleton className="w-[100px] h-[5px] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonComponent;
