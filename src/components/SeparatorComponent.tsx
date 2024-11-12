import { Separator } from "./ui/separator";

const SeparatorComponent = () => {
  return (
    <div>
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/separator"
        className="font-bold underline cursor-pointer"
      >
        Separator
      </a>
      <section className="flex flex-col items-center w-96 gap-2">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, quo.
        </h1>
        <Separator />
        <div className="flex h-5 items-center text-center text-sm">
          <div className="w-48">Lorem ipsum dolor sit.</div>
          <Separator orientation="vertical" />
          <div className="w-48">Lorem ipsum dolor sit.</div>
        </div>
      </section>
    </div>
  );
};

export default SeparatorComponent;
