"use server";

import { createClient } from "@/libs/supabase/server";
import { revalidatePath } from "next/cache";

export async function getInstructures(
  page = 1,
  pageSize = 10
) {
  const supabase = await createClient();

  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, count, error } = await supabase
    .from("instructures")
    .select("*", { count: "exact" })
    .range(from, to)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return {
    data,
    total: count ?? 0,
    page,
    pageSize,
    totalPages: Math.ceil((count ?? 0) / pageSize),
  };
}

export async function createInstructure(
  values: any,
  file: File | null
) {
  const supabase = await createClient();

  let profile_pic = "";

  if (file) {
    const ext = file.name.split(".").pop();

    const fileName = `${Date.now()}-${crypto.randomUUID()}.${ext}`;

    const filePath = `instructures/${fileName}`;

    const arrayBuffer = await file.arrayBuffer();

    const { error: uploadError } = await supabase.storage
      .from("media")
      .upload(filePath, Buffer.from(arrayBuffer), {
        contentType: file.type,
      });

    if (uploadError) throw uploadError;

    const { data } = supabase.storage
      .from("media")
      .getPublicUrl(filePath);

    profile_pic = data.publicUrl;
  }

  const { error } = await supabase
    .from("instructures")
    .insert({
      ...values,
      profile_pic,
    });

  if (error) throw error;

  revalidatePath("/asgard/content/instructures");
}

export async function updateInstructure(
  id: number,
  values: any,
  file: File | null
) {
  const supabase = await createClient();

  let payload = {
    ...values,
  };

  if (file) {
    const ext = file.name.split(".").pop();

    const fileName = `${Date.now()}-${crypto.randomUUID()}.${ext}`;

    const filePath = `instructures/${fileName}`;

    const arrayBuffer = await file.arrayBuffer();

    const { error: uploadError } = await supabase.storage
      .from("media")
      .upload(filePath, Buffer.from(arrayBuffer), {
        contentType: file.type,
      });

    if (uploadError) throw uploadError;

    const { data } = supabase.storage
      .from("media")
      .getPublicUrl(filePath);

    payload = {
      ...payload,
      profile_pic: data.publicUrl,
    };
  }

  const { error } = await supabase
    .from("instructures")
    .update(payload)
    .eq("id", id);

  if (error) throw error;

  revalidatePath("/asgard/content/instructures");
}

export async function deleteInstructure(id: number) {
  const supabase = await createClient();

  // Get existing profile picture
  const { data: instructure, error: fetchError } = await supabase
    .from("instructures")
    .select("profile_pic")
    .eq("id", id)
    .single();

  if (fetchError) {
    throw fetchError;
  }

  // Delete image from storage
  if (instructure?.profile_pic) {
    const path =
      instructure.profile_pic.split("/media/")[1];

    if (path) {
      const { error: storageError } = await supabase.storage
        .from("media")
        .remove([path]);

      if (storageError) {
        throw storageError;
      }
    }
  }

  // Delete database record
  const { error } = await supabase
    .from("instructures")
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }

  revalidatePath("/asgard/content/instructures");
}