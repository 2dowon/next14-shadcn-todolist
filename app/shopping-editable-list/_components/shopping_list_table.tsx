"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data: ShoppingItem[] = [
  {
    id: 1,
    price: 31600000,
    category: "로봇청소기",
    modelName: "test1",
  },
  {
    id: 2,
    price: 24200,
    category: "냉장고",
    modelName: "test2",
  },
  {
    id: 3,
    price: 8370,
    category: "TV",
    modelName: "test3",
  },
  {
    id: 4,
    price: 874000,
    category: "세탁기",
    modelName: "test4",
  },
  {
    id: 5,
    price: 72100,
    category: "건조기",
    modelName: "test6",
  },
  {
    id: 6,
    price: 874000,
    category: "식기세척기",
    modelName: "test4",
  },
  {
    id: 7,
    price: 72100,
    category: "노트북",
    modelName: "test7",
  },
];

export type ShoppingItem = {
  id: number;
  price: number;
  category: string;
  modelName: string;
};

export const columns: ColumnDef<ShoppingItem>[] = [
  {
    accessorKey: "category",
    header: "항목",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("category")}</div>
    ),
  },
  {
    accessorKey: "modelName",
    header: "제품명",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("modelName")}</div>
    ),
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          가격
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("ko-KR").format(price);

      return <div className="font-medium">{formatted}원</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    size: 10,
    cell: ({ row }) => {
      const shoppingItem = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(shoppingItem.id.toString())
              }
            >
              Copy Shopping Item ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>TEST 1</DropdownMenuItem>
            <DropdownMenuItem>TEST 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function ShoppingListTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    defaultColumn: {
      size: 200, //starting column size
      minSize: 50, //enforced during column resizing
      maxSize: 500, //enforced during column resizing
    },
  });

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-center">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      width={cell.column.getSize()}
                      className="text-center"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
