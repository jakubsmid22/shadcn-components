import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

const PaginationComponent = () => {
  return (
    <div>
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/pagination"
        className="font-bold underline cursor-pointer"
      >
        Pagination
      </a>
      <Pagination>
        <PaginationContent>
          <PaginationPrevious href="#" />
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationNext href="#" />
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
