import React from "react";
import { StickyNote } from "lucide-react";

const NotesContent = ({ notes, noteInput, setNoteInput, onAddNote }) => {
  return (
    <div className="space-y-2 sm:space-y-3">
      {/* --- Form Card --- */}
      <div className="p-2 sm:p-3 lg:p-4 rounded-lg bg-[#11294B]">
        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
          <StickyNote
            className="w-4 sm:w-5 h-4 sm:h-5 text-sky-400"
            aria-hidden
          />
          Clinical Notes
        </h3>

        <form className="mb-2 sm:mb-3" onSubmit={onAddNote}>
          <div className="mb-2">
            <textarea
              className="w-full p-2 sm:p-2.5 rounded-lg text-white placeholder-white/40 text-xs sm:text-sm bg-white/5 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400 focus:ring-opacity-20 transition-all duration-300 min-h-[90px] resize-vertical"
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
            className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-xs sm:text-sm bg-sky-500 text-white"
          >
            Save Note
          </button>
        </form>
      </div>

      {/* --- Notes List Card --- */}
      <div className="p-2 sm:p-3 lg:p-4 rounded-lg bg-[#11294B]">
        <div className="space-y-2">
          {notes.length > 0 ? (
            notes.map((note) => (
              <div key={note.id} className="p-2 sm:p-2.5 rounded-lg bg-white/5">
                <div className="flex items-center justify-between gap-1 mb-1 flex-wrap">
                  <strong className="text-white text-xs sm:text-sm break-words">
                    {note.author}
                  </strong>
                  <span className="text-white/60 text-xs">{note.date}</span>
                </div>
                <p className="text-white/80 text-xs sm:text-sm break-words">
                  {note.content}
                </p>
              </div>
            ))
          ) : (
            <p className="text-white/60 text-xs sm:text-sm text-center py-4">
              No clinical notes recorded yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesContent;