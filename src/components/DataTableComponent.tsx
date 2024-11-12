"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
type Email = {
  id: number;
  status: "read" | "unread";
  sender: string;
  date: string;
};

const emails: Email[] = [
  {
    id: 1,
    status: "read",
    sender: "jake@gmail.com",
    date: "1 Feb",
  },
  {
    id: 2,
    status: "unread",
    sender: "lucy@example.com",
    date: "3 Feb",
  },
  {
    id: 3,
    status: "read",
    sender: "mark@workmail.com",
    date: "5 Feb",
  },
  {
    id: 4,
    status: "unread",
    sender: "susan@company.org",
    date: "8 Feb",
  },
  {
    id: 5,
    status: "read",
    sender: "john.doe@yahoo.com",
    date: "10 Feb",
  },
];

const columns: ColumnDef<Email>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "sender",
    header: "Sender",
  },
  {
    accessorKey: "date",
    header: "Sent",
  },
];

const DataTableComponent = () => {
  const table = useReactTable<Email>({
    data: emails,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/data-table"
        className="font-bold underline cursor-pointer"
      >
        Data Table
      </a>
      <div className="rounded-md border">
          <Table>
            <TableHeader>
              {
                table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {
                      headerGroup.headers.map((header) => {
                        return (
                          <TableHead key={header.id}>
                            {
                              header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())
                            }
                          </TableHead>
                        )
                      })
                    }
                  </TableRow>
                ))
              }
            </TableHeader>
            <TableBody>
              {
                table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                      {
                        row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {
                              flexRender(cell.column.columnDef.cell, cell.getContext())
                            }
                          </TableCell>
                        ))
                      }
                    </TableRow>
                  ))
                ): (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">No results.</TableCell>
                  </TableRow>
                )
              }
            </TableBody>
          </Table>
      </div>
    </div>
  );
};

export default DataTableComponent;
