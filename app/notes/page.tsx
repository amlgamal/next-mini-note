"use client";

import { useEffect, useState } from "react";

type Note = {
  _id: string;
  title: string;
  content: string;
};

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState<string | null>(null);

  const fetchNotes = async () => {
    const res = await fetch("/api/notes");
    const data = await res.json();
    setNotes(data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchNotes();
  }, []);

  const handleCreate = async () => {
    await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    setTitle("");
    setContent("");
    fetchNotes();
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/notes/${id}`, {
      method: "DELETE",
    });

    fetchNotes();
  };

  const startEdit = (note: Note) => {
    setEditId(note._id);
    setTitle(note.title);
    setContent(note.content);
  };

  const handleUpdate = async () => {
    if (!editId) return;

    await fetch(`/api/notes/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    setEditId(null);
    setTitle("");
    setContent("");
    fetchNotes();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Notes App
        </h1>

        {/* Form */}
       <div className="bg-white p-4 rounded-xl shadow-md mb-6 space-y-3">
  <input
    className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-green-500"
    placeholder="Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />

  <input
    className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-green-500"
    placeholder="Content"
    value={content}
    onChange={(e) => setContent(e.target.value)}
  />

  {editId ? (
    <button
      onClick={handleUpdate}
      className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
    >
      Update Note
    </button>
  ) : (
    <button
      onClick={handleCreate}
      className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
    >
      Add Note
    </button>
  )}
</div>

        {/* Notes List */}
        <div className="space-y-4">
          {notes.map((note) => (
            <div
              key={note._id}
              className="bg-white p-4 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {note.title}
              </h3>

              <p className="text-gray-600 mt-1">{note.content}</p>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => startEdit(note)}
                  className="bg-blue-500 text-white px-4 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(note._id)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}