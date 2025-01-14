"use client";
import React, { useEffect, useState } from "react";

export default function DateAndTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className="text-sm text-muted-foreground">{time}</p>
    </div>
  );
}
