// columns.ts
import { Button } from "@/components/ui/button";
import { type ColumnDef } from "@tanstack/react-table";
import { PenIcon } from "lucide-react";
export interface Item {
  _id: string; // MongoDB ID
  name: string;
  sku: string;
  category: string;
  quantity: number;
  unit: string;
  description?: string; // Optional field
  status: "In Stock" | "Out of Stock";
  createdAt?: string;
  updatedAt?: string;
}
export const getColumns = (onEdit: (item: Item) => void): ColumnDef<Item>[] => [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "sku",
    header: "SKU",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => `${row.original.quantity} ${row.original.unit}`,
  },
  {
    accessorKey: "unit",
    header: "Unit",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span
        className={
          row.original.status === "In Stock"
            ? "text-green-600 font-semibold"
            : "text-red-600 font-semibold"
        }
      >
        {row.original.status}
      </span>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => row.original.description || "-",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) =>
      row.original.createdAt
        ? new Date(row.original.createdAt).toLocaleDateString()
        : "-",
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) =>
      row.original.updatedAt
        ? new Date(row.original.updatedAt).toLocaleDateString()
        : "-",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const item = row.original;
      return (
        <Button size="icon" variant="ghost" onClick={() => onEdit(item)}>
          <PenIcon className="w-4 h-4" />
        </Button>
      );
    },
  },
];
