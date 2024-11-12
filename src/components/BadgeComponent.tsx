import { Badge } from "./ui/badge";

const BadgeComponent = () => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/badge"
        className="font-bold underline cursor-pointer"
      >
        Badge
      </a>
      <Badge className="text-center">Default</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline" >Outline</Badge>
      <Badge variant="secondary" >Secondary</Badge>
    </div>
  );
};

export default BadgeComponent;
