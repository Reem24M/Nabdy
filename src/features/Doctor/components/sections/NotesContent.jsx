import React from "react";
import { StickyNote } from "lucide-react";

const NotesContent = ({ notes, noteInput, setNoteInput, onAddNote }) => {
  return (
    <div className="p-5 !rounded-lg" style={{ backgroundColor: '#11294B', border: '1px solid rgba(255,255,255,0.1)' }}>
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <StickyNote className="w-5 h-5" style={{ color: '#169CF6' }} />
        Clinical Notes
      </h3>

      <form className="mb-4" onSubmit={onAddNote}>
        <div className="mb-3">
          <textarea
            className="w-full p-3 rounded-lg text-white placeholder-white/40 text-sm bg-white/5 border border-white/10 focus:outline-none focus:border-[#169CF6] focus:ring-2 focus:ring-[#169CF6] focus:ring-opacity-20 transition-all duration-300"
            style={{ 
              minHeight: '100px',
              resize: 'vertical'
            }}
            placeholder="Document your observation or follow-up plan..."
            value={noteInput}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                onAddNote(e);
              }
            }}
            onChange={(e) => setNoteInput(e.target.value)}
          />
        </div>
        <button type="submit" className="px-4 py-2.5 !rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm"
                style={{ backgroundColor: '#169CF6', color: 'white' }}>
          Save Note
        </button>
      </form>

      <div className="space-y-3">
        {notes.length > 0 ? (
          notes.map((note) => (
            <div key={note.id} className="p-3 !rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <div className="flex items-center justify-between mb-2">
                <strong className="text-white text-sm">{note.author}</strong>
                <span className="text-white/60 text-xs">{note.date}</span>
              </div>
              <p className="text-white/80 text-sm mb-0">{note.content}</p>
            </div>
          ))
        ) : (
          <p className="text-white/60 text-sm text-center py-4">No clinical notes recorded yet.</p>
        )}
      </div>
    </div>
  );
};

export default NotesContent;