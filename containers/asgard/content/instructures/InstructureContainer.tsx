"use client";

import { createBanner, deleteBanner, updateBanner } from '@/app/(asgard)/asgard/content/banners/actions';
import { createInstructure, updateInstructure } from '@/app/(asgard)/asgard/content/instructors/actions';
import { deleteInstructure } from '@/app/(asgard)/asgard/content/instructors/actions';
import { Instructure, instructureColumns } from '@/app/(asgard)/asgard/content/instructors/columns';
import { DataTable } from '@/app/(asgard)/data-table'
import { AddEditInstructureModal } from '@/components/modals/AddEditInstructureModal';
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useState } from 'react'

interface IInstructureContainerProps {
  result: any
}

const InstructureContainer: React.FC<IInstructureContainerProps> = ({ result }) => {
  const [open, setOpen] = useState(false);
  const [selectedInstructure, setSelectedInstructure] = useState<Instructure | null>(null);

  const handleEdit = (instructure: Instructure) => {
    setSelectedInstructure(instructure);
    setOpen(true);
  };

  const handleAdd = () => {
    setSelectedInstructure(null);
    setOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete instructure?")) return;

    await deleteInstructure(id);
  };

  const handleSubmit = async (
    values: any,
    file: File | null
  ) => {
    if (selectedInstructure) {
      await updateInstructure(
        selectedInstructure.id,
        values,
        file
      );
    } else {
      await createInstructure(values, file);
    }

    setOpen(false);
  };


  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Instructors
          </h1>
          <p className="text-sm text-muted-foreground">
            Manage instructors and their details.
          </p>
        </div>

        <Button onClick={handleAdd}>
          Add Instructor
        </Button>
      </div>

      <div className="rounded-2xl border bg-card shadow-sm">
        <DataTable
          columns={instructureColumns(
            handleEdit,
            handleDelete
          )}
          data={result.data}
        />
      </div>

      <AddEditInstructureModal
        open={open}
        onOpenChange={setOpen}
        instructure={selectedInstructure}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default InstructureContainer