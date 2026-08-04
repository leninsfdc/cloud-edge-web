"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Instructure = {
  id: number;
  name: string;
  designation: string;
  years_of_experience: number;
  past_companies: string[];
  description: string;
  tags: string[];
  profile_pic: string;
  created_at: string;
};

export const instructureColumns = (
  onEdit: (instructure: Instructure) => void,
  onDelete: (id: number) => void
): ColumnDef<Instructure>[] => [
  {
    accessorKey: "profile_pic",
    header: "Photo",
    cell: ({ row }) => (
      <Image
        src={row.original?.profile_pic}
        alt={row.original?.name}
        width={50}
        height={50}
        className="h-12 w-12 rounded-full object-cover border"
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "designation",
    header: "Designation",
  },
  {
    accessorKey: "years_of_experience",
    header: "Experience",
    cell: ({ row }) => (
      <span>{row.original.years_of_experience} Years</span>
    ),
  },
  {
    accessorKey: "past_companies",
    header: "Past Companies",
    cell: ({ row }) => (
      <span>{row?.original?.past_companies?.join(", ")}</span>
    ),
  },
  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) => (
      <div className="flex flex-wrap gap-1">
        {row?.original?.tags?.map((tag:any) => (
          <span
            key={tag}
            className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-700"
          >
            {tag}
          </span>
        ))}
      </div>
    ),
  },
  {
    accessorKey: "created_at",
    header: "Created",
    cell: ({ row }) =>
      new Date(row.original.created_at).toLocaleDateString(),
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }) => (
      <div className="flex justify-end gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onEdit(row.original)}
        >
          <Pencil className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(row.original.id)}
        >
          <Trash2 className="h-4 w-4 text-red-500" />
        </Button>
      </div>
    ),
  },
];