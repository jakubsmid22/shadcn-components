import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

const CommandComponent = () => {
  return (
    <div className="flex flex-col">
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/command"
        className="font-bold underline cursor-pointer"
      >
        Command
      </a>
      <Command className="h-32">
        <CommandInput placeholder="Search" />
        <CommandList>
          <CommandEmpty>No results found</CommandEmpty>
          <CommandGroup heading="System">
            <CommandItem>Screen</CommandItem>
            <CommandItem>Sound</CommandItem>
            <CommandItem>Notifications</CommandItem>
            <CommandItem>Storage</CommandItem>
          </CommandGroup>
          <CommandGroup heading="Network">
            <CommandItem>Ethernet</CommandItem>
            <CommandItem>VPN</CommandItem>
            <CommandItem>Proxy server</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default CommandComponent;
