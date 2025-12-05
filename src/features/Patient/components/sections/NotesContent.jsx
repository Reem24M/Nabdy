import React from "react";
import { StickyNote } from "lucide-react";

const NotesContent = ({ notes, noteInput, setNoteInput, onAddNote }) => {
  return (
    <div
      className="p-3 sm:p-5 !rounded-lg"
      style={{
        backgroundColor: "#11294B",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
        <StickyNote
          className="w-4 h-4 sm:w-5 sm:h-5"
          style={{ color: "#169CF6" }}
        />
        Clinical Notes
      </h3>

      <form className="mb-4" onSubmit={onAddNote}>
        <div className="mb-3">
          <textarea
            className="w-full p-2 sm:p-3 rounded-lg text-white placeholder-white/40 text-sm sm:text-base bg-white/5 border border-white/10 focus:outline-none focus:border-[#169CF6] focus:ring-2 focus:ring-[#169CF6] focus:ring-opacity-20 transition-all duration-300"
            style={{ minHeight: "100px", resize: "vertical" }}
            placeholder="Document your observation or follow-up plan..."
            value={noteInput}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                onAddNote(e);
              }
            }}
            onChange={(e) => setNoteInput(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2.5 !rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          style={{ backgroundColor: "#169CF6", color: "white" }}
        >
          Save Note
        </button>
      </form>

      <div className="space-y-2 sm:space-y-3">
        {notes.length > 0 ? (
          notes.map((note) => (
            <div
              key={note.id}
              className="p-2 sm:p-3 !rounded-lg"
              style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 sm:mb-2">
                <strong className="text-white text-sm sm:text-base">
                  {note.author}
                </strong>
                <span className="text-white/60 text-xs sm:text-sm whitespace-nowrap">
                  {note.date}
                </span>
              </div>
              <p className="text-white/80 text-xs sm:text-sm mb-0">
                {note.content}
              </p>
            </div>
          ))
        ) : (
          <p className="text-white/60 text-sm sm:text-base text-center py-4">
            No clinical notes recorded yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default NotesContent;