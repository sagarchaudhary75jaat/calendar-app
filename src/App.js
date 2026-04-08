import React, { useState } from "react";
import Calendar from "./components/Calendar";
import Notes from "./components/Notes";
import "./App.css";

function App() {

  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  return (
    <div className="container">

      <div className="top">
        <img
          src="https://thumbs.dreamstime.com/b/photo-dark-key-man-climbing-mountain-illuminated-behind-sun-climbs-up-160933381.jpg"
          alt="calendar"
          className="hero"
        />
      </div>

      <div className="bottom">

        <div className="left">
          <Notes start={start} end={end} />
        </div>

        <div className="right">
          <Calendar setStart={setStart} setEnd={setEnd} />
        </div>

      </div>

    </div>
  );
}

export default App;