import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable";

const ResizableComponent = () => {
  return (
    <div>
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/resizable"
        className="font-bold underline cursor-pointer"
      >
        Resizable
      </a>
      <ResizablePanelGroup className="bg-black text-white min-w-96 rounded-md" direction="horizontal">
        <ResizablePanel>One</ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>Two</ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default ResizableComponent;
