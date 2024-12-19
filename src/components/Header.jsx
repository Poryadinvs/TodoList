import React, { useState, useEffect } from "react";
import { DAYS, MONTHS } from "../utils/date";

export default function Header() {
  const [time, setTime] = useState("day");
  const date = new Date();
  let hours = date.getHours();

  useEffect(() => {
    if (hours > 19 || hours < 7) {
      setTime("night");
    } else {
      setTime("day");
    }
  }, [hours]);

  return (
    <div className={`header ${time}`}>
      <h1>{DAYS[date.getDay()]}</h1>
      <span>
        {MONTHS[date.getMonth()]}, {date.getDate()}
      </span>
    </div>
  );
}
