import React from "react";
import { Textarea } from "./ui/textarea";

const TextareaComponent = () => {
  return (
    <div className="flex flex-col gap-2">
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/textarea"
        className="font-bold underline cursor-pointer"
      >
        Textarea
      </a>
      <Textarea className="w-96" />
    </div>
  );
};

export default TextareaComponent;
