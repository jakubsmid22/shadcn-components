import { MoveLeft, MoveRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const CarouselComponent = () => {
  return (
    <div className="mx-5">
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/carousel"
        className="font-bold underline cursor-pointer"
      >
        Carousel
      </a>
      <Carousel className="w-96" opts={{loop: true}}>
        <CarouselContent className="h-80">
          <CarouselItem className="h-full w-full overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/adorable-black-white-kitty-with-monochrome-wall-her_23-2148955182.jpg?ga=GA1.1.1789204181.1728762732&semt=ais_hybrid"
              className="h-full w-full object-cover"
            />
          </CarouselItem>
          <CarouselItem className="h-full w-full overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/view-adorable-persian-domestic-cat_23-2151773881.jpg?ga=GA1.1.1789204181.1728762732&semt=ais_hybrid"
              className="h-full w-full object-cover"
            />
          </CarouselItem>
          <CarouselItem className="h-full w-full overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/close-up-adorable-kitten-indoors_23-2150782465.jpg?ga=GA1.1.1789204181.1728762732&semt=ais_hybrid"
              className="h-full w-full object-cover"
            />
          </CarouselItem>
          <CarouselItem className="h-full w-full overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/close-up-kitten-surrounded-by-flowers_23-2150782325.jpg?ga=GA1.1.1789204181.1728762732&semt=ais_hybrid"
              className="h-full w-full object-cover"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious>
          <MoveLeft />
        </CarouselPrevious>
        <CarouselNext>
          <MoveRight />
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
