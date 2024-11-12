"use client";
import { useState } from "react";
import { Calendar } from "./ui/calendar";

const CalendarComponent = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col items-center">
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/calendar"
        className="font-bold underline cursor-pointer"
      >
        Calendar
      </a>
      <p>{date?.toDateString()}</p>
      <Calendar mode="single" selected={date} onSelect={setDate} />
    </div>
  );
};

export default CalendarComponent;
