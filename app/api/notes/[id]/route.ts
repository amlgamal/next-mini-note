import { connectedDB } from "@/app/lib/db";
import { Note } from "@/app/lib/models/noteModel";
import { NextResponse } from "next/server";

// get one note
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectedDB();

    const { id } = await params;

    const note = await Note.findById(id);

    if (!note) {
      return NextResponse.json({ message: "Note not found" }, { status: 404 });
    }

    return NextResponse.json(note);
  } catch (err) {
    return NextResponse.json(
      { message: "Error fetching note" },
      { status: 500 },
    );
  }
}

// update note
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectedDB();
    const { id } = await params;
    const body = await req.json();

    const updateNote = await Note.findByIdAndUpdate(
      id,
      {
        title: body.title,
        content: body.content,
      },
      { new: true },
    );
    if (!updateNote) {
      return NextResponse.json({ message: "Note not found" }, { status: 404 });
    }
    return NextResponse.json(updateNote);
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating note" },
      { status: 500 },
    );
  }
}

// DELETE NOTE
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectedDB();
    const { id } = await params;

    const deleteNote = await Note.findByIdAndDelete(id);

    if (!deleteNote) {
      return NextResponse.json({ message: "Note not found" }, { status: 404 });
    }
    return NextResponse.json({
      message: "Note deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting note" },
      { status: 500 },
    );
  }
}
