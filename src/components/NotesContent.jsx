import React from "react";

export default function NotesContent({ notes = [], noteInput, setNoteInput, onAddNote }) {
  return (
    <div>
      <form onSubmit={onAddNote} className="mb-4">
        <textarea
          value={noteInput}
          onChange={(e)=>setNoteInput(e.target.value)}
          className="w-full rounded-xl bg-[#021619] border border-slate-700 p-3 text-slate-100"
          rows={3}
          placeholder="Document your observation..."
        />
        <div className="mt-3 flex justify-end">
          <button type="submit" className="px-5 py-2 rounded-full bg-gradient-to-r from-sky-400 to-sky-600 text-black font-semibold">Save Note</button>
        </div>
      </form>

      <div className="space-y-3">
        {notes.length ? notes.map(n=>(
          <div key={n.id} className="p-3 rounded-xl bg-[#021617]">
            <div className="flex items-center justify-between">
              <div className="font-medium">{n.author}</div>
              <div className="text-xs text-slate-400">{n.date}</div>
            </div>
            <p className="text-slate-300 mt-2">{n.content}</p>
          </div>
        )) : <div className="text-slate-400">No clinical notes recorded yet.</div>}
      </div>
    </div>
  );
}
