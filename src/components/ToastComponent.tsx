"use client";

import { useToast } from "@/hooks/use-toast";
import { Button } from "./ui/button";
import { Toaster } from "./ui/toaster";

const ToastComponent = () => {
  const { toast } = useToast();

  return (
    <div className="flex flex-col gap-2">
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/toast"
        className="font-bold underline cursor-pointer"
      >
        Toast
      </a>
      <Button
        onClick={() => {
          toast({
            title: "Title",
            description: "Description",
          });
        }}
      >
        Show Toast
      </Button>
      <Toaster/>
    </div>
  );
};

export default ToastComponent;
