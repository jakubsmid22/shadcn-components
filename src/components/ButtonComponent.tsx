import { Button } from "./ui/button";

const ButtonComponent = () => {
  return (
    <div className="flex flex-col gap-2">
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/button"
        className="font-bold underline cursor-pointer"
      >
        Button
      </a>
      <Button>Default</Button>
      <Button variant="destructive" >Destructive</Button>
      <Button variant="ghost" >Ghost</Button>
      <Button variant="link" >Link</Button>
      <Button variant="outline" >Outline</Button>
      <Button variant="secondary" >Secondary</Button>
    </div>
  );
};

export default ButtonComponent;
