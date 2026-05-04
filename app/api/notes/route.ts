import { connectedDB } from "@/app/lib/db";
import { Note } from "@/app/lib/models/noteModel";
import { NextResponse } from "next/server";

// Gets all notes
export async function GET() {
   console.log("GET HIT");
  try {
    await connectedDB();

    const notes = await Note.find();
console.log("hello");

    return NextResponse.json(notes);
  } catch (err) {
    return NextResponse.json(
      { message: "Error Fetching Notes" },
      { status: 500 },
    );
  }
}
//create note
export async function POST(req: Request) {
    try {
        await connectedDB()

        const body = await req.json()
        const newNote = await Note.create({
            title: body.title,
            content: body.content,
        })
        return NextResponse.json(newNote, {status: 200})
    }catch (err) {
    return NextResponse.json(
      { message: "Error creating note" },
      { status: 500 }
    );
  }
}
