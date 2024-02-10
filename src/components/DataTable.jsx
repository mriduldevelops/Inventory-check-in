"use client";

import React from "react";
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

export function DataTable({ columns, data }) {
  // Initialize React Table instance
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // Extract row model from the table instance
  const rowModel = table.getRowModel();
  // Extract rows from row model if available, otherwise set to an empty array
  const rows = rowModel?.rows || [];

  return (
    <div className="rounded-md border">
      {/* Render table */}
      <Table>
        {/* Render table header */}
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {/* Render table header cells */}
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {/* Render header content if not a placeholder */}
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        {/* Render table body */}
        <TableBody className="overflow-scroll">
          {/* Check if there are rows to render */}
          {rows.length ? (
            // If rows exist, map through them and render each row
            rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() ? 'selected' : undefined}>
                {/* Map through visible cells of the row and render each cell */}
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {/* Render cell content using flexRender */}
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            // If no rows, render a single row indicating no results
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
