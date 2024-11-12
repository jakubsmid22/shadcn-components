import {
  Edit,
  File,
  LogOut,
  Search,
  Sparkles,
  TrendingUp,
  User,
} from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "./ui/menubar";

const MenuBarComponent = () => {
  return (
    <div>
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/menubar"
        className="font-bold underline cursor-pointer"
      >
        Menu Bar
      </a>
      <Menubar className="mt-2">
        <MenubarMenu>
          <MenubarTrigger>Dashboard</MenubarTrigger>
          <MenubarContent>
            <MenubarItem className="flex gap-2">
              <TrendingUp /> Analytics
            </MenubarItem>
            <MenubarItem className="flex gap-2">
              <Sparkles /> Insights
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="flex gap-2">
              <File /> Reports
            </MenubarItem>
            <MenubarItem className="flex gap-2">
              <Edit /> Edit Overview
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Tools</MenubarTrigger>
          <MenubarContent>
            <MenubarItem className="flex gap-2">
              <Search /> Search
            </MenubarItem>
            <MenubarItem className="flex gap-2">
              <File /> File Manager
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Account</MenubarTrigger>
          <MenubarContent>
            <MenubarItem className="flex gap-2">
              <User /> Profile
            </MenubarItem>
            <MenubarItem className="flex gap-2">
              <Edit /> Settings
            </MenubarItem>
            <MenubarItem className="flex gap-2 text-red-600">
              <LogOut /> Log Out
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default MenuBarComponent;
