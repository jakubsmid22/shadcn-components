"use client";

import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Check, ChevronsUpDown, Search } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

export const ComboboxComponent = () => {
  const data = [
    {
      value: "messi",
      label: "Lionel Messi",
    },
    {
      value: "ronaldo",
      label: "Cristiano Ronaldo",
    },
    {
      value: "mbappe",
      label: "Kylian Mbappé",
    },
    {
      value: "haaland",
      label: "Erling Haaland",
    },
    {
      value: "neymar",
      label: "Neymar Jr.",
    },
    {
      value: "lewandowski",
      label: "Robert Lewandowski",
    },
    {
      value: "de-bruyne",
      label: "Kevin De Bruyne",
    },
    {
      value: "salah",
      label: "Mohamed Salah",
    },
    {
      value: "benzema",
      label: "Karim Benzema",
    },
    {
      value: "modric",
      label: "Luka Modrić",
    },
  ];

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col">
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/combobox"
        className="font-bold underline cursor-pointer"
      >
        Combobox
      </a>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" role="combobox" aria-expanded={open} className="w-52">
            {value
              ? data.find((e) => e.value === value)?.label
              : "Select a football player"}
            <ChevronsUpDown />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Command>
            <CommandInput placeholder="Search a football player" />
            <CommandList>
              <CommandEmpty>No football player found</CommandEmpty>
              <CommandGroup>
                {data.map((e) => (
                  <CommandItem
                    key={e.value}
                    value={e.value}
                    onSelect={(curr) => {
                      setValue(curr === value ? "" : curr);
                    }}
                  >
                    <Check
                      className={`${
                        e.value === value ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    {e.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};
