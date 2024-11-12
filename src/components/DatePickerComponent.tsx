"use client";

import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";

const DatePickerComponent = () => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className="flex flex-col gap-2">
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/date-picker"
        className="font-bold underline cursor-pointer"
      >
        Date Picker
      </a>
      <Popover>
        <PopoverTrigger asChild className="w-36">
            <Button>
                <CalendarIcon/>
                {date ? date.toLocaleDateString() : <span>Pick a date</span>}
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date || undefined} onSelect={(day) => setDate(day || null)} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePickerComponent;
