"use client";
import { EyeClosed } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { useState } from "react";
import { Button } from "./ui/button";

const AlertComponent = () => {
  const [isAlert1Shown, setIsAlert1Shown] = useState(false);
  const [isAlert2Shown, setIsAlert2Shown] = useState(false);

  return (
    <div className="space-y-5">
      <a target="_blank" href="https://ui.shadcn.com/docs/components/alert" className="font-bold underline cursor-pointer">Alert</a>
      <div>
        <Button
          onClick={() => {
            setIsAlert1Shown(true);
            setIsAlert2Shown(false);
            setTimeout(() => {
              setIsAlert1Shown(false);
            }, 10000);
          }}
        >
          Show Alert
        </Button>
        <Alert className={`${!isAlert1Shown && "hidden"} absolute top-5 right-5 w-96`}>
          <AlertTitle className="flex justify-between items-center">
            Lorem ipsum dolor sit amet.{" "}
            <EyeClosed
              onClick={() => setIsAlert1Shown(false)}
              className="cursor-pointer"
              width={15}
              height={15}
            />
          </AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            vel.
          </AlertDescription>
        </Alert>
      </div>
      <div>
        <Button
            variant="destructive"
          onClick={() => {
            setIsAlert2Shown(true);
            setIsAlert1Shown(false);
            setTimeout(() => {
              setIsAlert2Shown(false);
            }, 10000);
          }}
        >
          Show Destructive Alert
        </Button>
        <Alert variant="destructive" className={`${!isAlert2Shown && "hidden"} absolute top-5 right-5 w-96 bg-white`}>
          <AlertTitle className="flex justify-between items-center">
            Lorem ipsum dolor sit amet.{" "}
            <EyeClosed
              onClick={() => setIsAlert2Shown(false)}
              className="cursor-pointer"
              width={15}
              height={15}
            />
          </AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            vel.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default AlertComponent;
