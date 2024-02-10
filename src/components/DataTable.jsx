"use client";
// import React from "react";
// import {
//   flexRender,
//   getCoreRowModel,
//   useReactTable,
// } from "@tanstack/react-table";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// export function DataTable({ columns, data }) {
//   const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//   });

//   return /*#__PURE__*/ React.createElement(
//     "div",
//     {
//       className: "rounded-md border",
//     },
//     /*#__PURE__*/ React.createElement(
//       Table,
//       null,
//       /*#__PURE__*/ React.createElement(
//         TableHeader,
//         null,
//         table.getHeaderGroups().map((headerGroup) =>
//           /*#__PURE__*/ React.createElement(
//             TableRow,
//             {
//               key: headerGroup.id,
//             },
//             headerGroup.headers.map((header) =>
//               /*#__PURE__*/ React.createElement(
//                 TableHead,
//                 {
//                   key: header.id,
//                 },
//                 header.isPlaceholder
//                   ? null
//                   : flexRender(
//                       header.column.columnDef.header,
//                       header.getContext()
//                     )
//               )
//             )
//           )
//         )
//       ),
//       /*#__PURE__*/ React.createElement(
//         TableBody,
//         {
//           className: "overflow-scroll",
//         },
//         null,
//         table.getRowModel().rows?.length
//           ? table.getRowModel().rows.map((row) =>
//               /*#__PURE__*/ React.createElement(
//                 TableRow,
//                 {
//                   key: row.id,
//                   "data-state": row.getIsSelected() && "selected",
//                 },
//                 row.getVisibleCells().map((cell) =>
//                   /*#__PURE__*/ React.createElement(
//                     TableCell,
//                     {
//                       key: cell.id,
//                     },
//                     flexRender(cell.column.columnDef.cell, cell.getContext())
//                   )
//                 )
//               )
//             )
//           : /*#__PURE__*/ React.createElement(
//               TableRow,
//               null,
//               /*#__PURE__*/ React.createElement(
//                 TableCell,
//                 {
//                   colSpan: columns.length,
//                   className: "h-24 text-center",
//                 },
//                 "No results."
//               )
//             )
//       )
//     )
//   );
// }

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
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const rowModel = table.getRowModel();
  const rows = rowModel?.rows || [];

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="overflow-scroll">
          {rows.length ? (
            rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() ? 'selected' : undefined}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
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
