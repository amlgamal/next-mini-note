"use server";

import { connectedDB } from "@/app/lib/db";
import { Note } from "@/app/lib/models/noteModel";
import { revalidatePath } from "next/cache";

export async function createNote(formData: FormData) {
  await connectedDB();

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  await Note.create({ title, content });

  // refresh UI after create
  revalidatePath("/notes");
}
