import { Input } from "./ui/input";

const InputComponent = () => {
  return (
    <div className="flex flex-col gap-2">
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/input"
        className="font-bold underline cursor-pointer"
      >
        Input
      </a>
      <div>
        <label htmlFor="default1">Default</label>
        <Input id="default1" />
      </div>
      <div>
        <label htmlFor="file">File</label>
        <Input id="title1" type="file" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" />
      </div>
      <div>
        <label htmlFor="disabled">Disabled</label>
        <Input id="disabled" type="text" disabled />
      </div>
    </div>
  );
};

export default InputComponent;
