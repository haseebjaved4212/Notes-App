import React, { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      setNotes([...notes, { title, content, id: Date.now() }]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <h1 className="text-4xl text-center py-6 font-bold text-blue-400">
        Notes App
      </h1>

      <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8">
        {/* Form Section */}
        <div className="w-full md:w-1/3 bg-gray-800 rounded-lg shadow-md p-6 border border-gray-700">
          <form onSubmit={formHandler} className="space-y-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Note Title"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Note Content"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
            />
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors"
            >
              Add Note
            </button>
          </form>
        </div>

        {/* Notes Display Section */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold text-center text-blue-400 mb-4">
            Your Notes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {notes.map((note) => (
              <div
                key={note.id}
                className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-blue-900/50 transition-shadow border border-gray-700"
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  {note.title}
                </h3>
                <p className="text-gray-300">{note.content}</p>
              </div>
            ))}
            {notes.length === 0 && (
              <p className="text-gray-400 col-span-full text-center py-4">
                No notes yet. Create your first note!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
