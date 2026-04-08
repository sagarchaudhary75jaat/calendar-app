import React, { useState } from "react";

export default function Calendar() {
  const [date, setDate] = useState(new Date());
  const today = new Date();

  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const year = date.getFullYear();
  const month = date.getMonth();

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  const weekDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  // 👉 RANGE CLICK LOGIC
 const handleClick = (day) => {
  if (!day) return;

  // 👉 Step 1: no start → set start
  if (!start) {
    setStart(day);
    setEnd(null);
  }

  // 👉 Step 2: start hai but end nahi → set end
  else if (!end) {
    if (day < start) {
      // agar user pehle chhoti date click kare
      setStart(day);
    } else {
      setEnd(day);
    }
  }

  // 👉 Step 3: dono selected → reset
  else {
    setStart(day);
    setEnd(null);
  }
};

  const inRange = (day) => {
    return start && end && day >= start && day <= end;
  };

  const nextMonth = () => {
  setDate(new Date(year, month + 1, 1));
  setStart(null);   // 👈 reset
  setEnd(null);     // 👈 reset
};

const prevMonth = () => {
  setDate(new Date(year, month - 1, 1));
  setStart(null);   // 👈 reset
  setEnd(null);     // 👈 reset
};

  return (
    <div>

      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={prevMonth}>⬅️</button>
        <h2 className="month-title">{monthNames[month]} {year}</h2>
        <button onClick={nextMonth}>➡️</button>
      </div>

      {/* WEEK DAYS */}
      <div className="grid">
        {weekDays.map((d) => (
          <div key={d} className="day"><b>{d}</b></div>
        ))}
      </div>

      {/* DATES */}
      <div className="grid">
       {days.map((day, index) => {
  const isToday =
    day &&
    today.getDate() === day &&
    today.getMonth() === month &&
    today.getFullYear() === year;

  return (
    <div
      key={index}
      onClick={() => day && handleClick(day)}
      className={`day
        ${day && day === start ? "start" : ""}
        ${day && day === end ? "end" : ""}
        ${day && inRange(day) ? "range" : ""}
        ${isToday ? "today" : ""}
      `}
    >
      {day || ""}
    </div>
  );
})}
      </div>

    </div>
  );
}