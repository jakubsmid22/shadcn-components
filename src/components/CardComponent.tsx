import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import { EuroIcon, Star } from "lucide-react";

const CardComponent = () => {
  return (
    <div>
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/card"
        className="font-bold underline cursor-pointer"
      >
        Card
      </a>
      <Card className="w-80">
        <CardHeader className="p-0 rounded-md overflow-hidden">
          <img src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?t=st=1730625782~exp=1730629382~hmac=91dc711af73261460cf28dbfc4c86cb3183210392001212a068a5e047a41f210&w=1380" />
        </CardHeader>
        <CardContent className="p-3">
          <h1 className="font-bold">Pepperoni Pizza</h1>
          <div className="flex items-center text-green-800">
            <span className="text-xl">10</span> <EuroIcon className="h-4" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between p-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center bg-green-800 text-white py-2 w-20 rounded-md">
              <Star className="h-3" /> <span className="text-sm">5/5</span>
            </div>
            <p className="text-sm text-slate-600">226 ratings</p>
          </div>
          <p className="text-sm text-green-800 font-bold cursor-pointer">
            More Details
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardComponent;
