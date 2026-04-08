import React, { useState, useEffect } from "react";

export default function Notes({ start, end }) {
  const [note, setNote] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("note");
    if (saved) setNote(saved);
  }, []);

  const handleChange = (e) => {
    setNote(e.target.value);
    localStorage.setItem("note", e.target.value);
  };

  return (
    <div>
      <h2>📝 Notes</h2>
      

      <textarea
        value={note}
        onChange={handleChange}
        className="notes-area"
      />
    </div>
  );
}