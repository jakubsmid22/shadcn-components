"use client";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Toaster } from "./ui/sonner";

const SonnerComponent = () => {
  return (
    <div className="flex flex-col gap-2">
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/sonner"
        className="font-bold underline cursor-pointer"
      >
        Sonner
      </a>
      <Button
        onClick={() => {
          toast.success("Success");
        }}
      >
        Success
      </Button>
      <Button
        onClick={() => {
          toast.error("Error");
        }}
      >
        Error
      </Button>
      <Toaster />
    </div>
  );
};

export default SonnerComponent;
