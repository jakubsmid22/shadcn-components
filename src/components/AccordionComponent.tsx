import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionComponent = () => {
  return (
    <div className="flex flex-col">
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/accordion"
        className="font-bold underline cursor-pointer"
      >
        Accordion
      </a>
      <Accordion type="single" collapsible className="w-96">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </AccordionTrigger>
          <AccordionContent className="max-w-96">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, deleniti.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">
            Lorem ipsum dolor sit amet.
          </AccordionTrigger>
          <AccordionContent className="max-w-96">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            debitis commodi, voluptatibus earum quos inventore dolorem odio,
            facilis officia repellat unde cupiditate. Saepe quibusdam unde illum
            ullam dolorem! Fugit, at.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionComponent;
