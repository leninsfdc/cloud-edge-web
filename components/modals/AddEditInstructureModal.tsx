"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Upload, Loader2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { Textarea } from "../ui/textarea";

export type InstructureForm = {
  id?: number;
  name: string;
  designation: string;
  years_of_experience: number;
  past_companies: string[];
  description: string;
  tags: string[];
  profile_pic?: string;
};

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  instructure?: InstructureForm | null;
  onSubmit: (
    values: InstructureForm,
    file: File | null
  ) => Promise<void>;
}

export function AddEditInstructureModal({
  open,
  onOpenChange,
  instructure,
  onSubmit,
}: Props) {
  const [loading, setLoading] = useState(false);

  const [file, setFile] = useState<File | null>(null);

  const [preview, setPreview] = useState("");

  const [form, setForm] = useState<InstructureForm>({
    name: "",
    designation: "",
    years_of_experience: 0,
    description: "",
    past_companies: [],
    tags: [],
  });

  const [companies, setCompanies] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    if (instructure) {
      setForm(instructure);
      setPreview(instructure.profile_pic || "");
      setCompanies(instructure.past_companies?.join(", "));
      setTags(instructure.tags?.join(", "));
      setFile(null);
    } else {
      setForm({
        name: "",
        designation: "",
        years_of_experience: 0,
        description: "",
        past_companies: [],
        tags: [],
      });

      setPreview("");
      setCompanies("");
      setTags("");
      setFile(null);
    }
  }, [instructure]);

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleSubmit = async () => {
    if (!form.name.trim()) {
      toast.error("Name is required");
      return;
    }

    if (!form.designation.trim()) {
      toast.error("Designation is required");
      return;
    }

    if (!form.description.trim()) {
      toast.error("Description is required");
      return;
    }

    const payload = {
      ...form,
      past_companies: companies
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean),

      tags: tags
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean),
    };

    setLoading(true);

    try {
      await onSubmit(payload, file);

      toast.success(
        instructure
          ? "Instructor updated"
          : "Instructor created"
      );
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong"
      );
    } finally {
      setLoading(false);
      setForm({
        name: "",
        designation: "",
        years_of_experience: 0,
        description: "",
        past_companies: [],
        tags: [],
      })
      setPreview("");
      setCompanies("");
      setTags("");
      setFile(null);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl rounded-2xl p-8 h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {instructure
              ? "Edit Instructor"
              : "Create Instructor"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Name</Label>

              <Input
                placeholder="John Doe"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
              />
            </div>

            <div className="space-y-2">
              <Label>Designation</Label>

              <Input
                placeholder="Senior Cloud Architect"
                value={form.designation}
                onChange={(e) =>
                  setForm({
                    ...form,
                    designation: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Years of Experience</Label>

            <Input
              type="number"
              placeholder="10"
              value={form.years_of_experience}
              onChange={(e) =>
                setForm({
                  ...form,
                  years_of_experience: Number(
                    e.target.value
                  ),
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label>Description</Label>

            <Textarea
              rows={5}
              placeholder="Instructor description..."
              value={form.description}
              onChange={(e) =>
                setForm({
                  ...form,
                  description: e.target.value,
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label>Past Companies</Label>

            <Input
              placeholder="Google, Microsoft, Amazon"
              value={companies}
              onChange={(e) =>
                setCompanies(e.target.value)
              }
            />

            <p className="text-xs text-muted-foreground">
              Separate companies with commas.
            </p>
          </div>

          <div className="space-y-2">
            <Label>Tags</Label>

            <Input
              placeholder="AWS, DevOps, Kubernetes"
              value={tags}
              onChange={(e) =>
                setTags(e.target.value)
              }
            />

            <p className="text-xs text-muted-foreground">
              Separate tags with commas.
            </p>
          </div>

          <div className="space-y-2">
            <Label>Profile Picture</Label>

            <label
              htmlFor="profile"
              className="group flex min-h-[180px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-muted-foreground/20 bg-muted/20 p-8 text-center hover:border-primary/40"
            >
              <Upload className="mb-3 h-8 w-8" />

              <p className="font-medium">
                {file
                  ? "Change Profile Picture"
                  : "Upload Profile Picture"}
              </p>

              <input
                id="profile"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>

          {preview && (
            <div className="overflow-hidden rounded-xl border">
              <Image
                src={preview}
                alt="preview"
                width={200}
                height={200}
                className="h-64 w-full object-contain"
              />
            </div>
          )}

          <Button
            className="w-full h-11 rounded-xl"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? (
              <Loader2 className="animate-spin h-4 w-4" />
            ) : instructure ? (
              "Update Instructor"
            ) : (
              "Create Instructor"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}