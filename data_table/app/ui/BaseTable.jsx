"use client";

import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { INVOICES, PAYMENTSTATUS } from "../lib/invoice-data";

const header = [
  {
    accessorKey: "invoice",
    header: "Invoice",
    id: "invoice",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment",
    id: "paymentStatus",
    cell: (props) => {
      return (
        <div
          style={{
            backgroundColor: props.getValue()?.backgroundColor,
            color: props.getValue()?.color,
          }}
          className="text-center"
        >
          {props.getValue()?.name}
        </div>
      );
    },
  },
  {
    accessorKey: "totalAmount",
    header: "Total Amount",
    id: "totalAmount",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "paymentMethod",
    header: "Payment Method",
    id: "paymentMethod",
    cell: (props) => <p>{props.getValue()}</p>,
  },
];

const BaseTable = () => {
  const [data, setData] = useState(INVOICES);
  const table = useReactTable({
    data,
    columns: header,
    getCoreRowModel: getCoreRowModel(),
  });

  const renderRows = () => {
    const tableRows = table.getRowModel().rows;
    tableRows?.map((row) => console.log(row.getVisibleCells()));
  };

  renderRows();

  return (
    <Table className="border">
      <TableHeader>
        {table.getHeaderGroups().map((header) => (
          <TableRow>
            {header.headers?.map((element) => (
              <TableHead className="text-center">
                {element.column.columnDef.header ?? ""}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells()?.map((cell) => (
              <TableCell className="grid place-items-center" key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BaseTable;
