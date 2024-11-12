import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
} from "./ui/sidebar";
import {
  ChartPie,
  Chrome,
  CircleDollarSign,
  FileText,
  Folder,
  Headset,
  House,
  MessageCircle,
  Video,
} from "lucide-react";

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-5">
          <Image
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
            alt="logo"
            width={50}
            height={50}
          ></Image>
          <a
            target="_blank"
            href="https://ui.shadcn.com/docs/components/sidebar"
            className="font-bold underline cursor-pointer"
          >
            SideBar
          </a>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Favourites</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-5 font-bold">
              <div className="flex gap-1 items-center cursor-pointer hover:bg-slate-200 transition-all duration-100">
                <FileText width={15} height={15} />
                <p>Technical Docs</p>
              </div>
              <div className="flex gap-1 items-center cursor-pointer hover:bg-slate-200 transition-all duration-100r">
                <FileText width={15} height={15} />
                <p>Campaign Guideliness</p>
              </div>
              <div className="flex gap-1 items-center cursor-pointer hover:bg-slate-200 transition-all duration-100">
                <FileText width={15} height={15} />
                <p>Important Rules</p>
              </div>
              <div className="flex gap-1 items-center cursor-pointer hover:bg-slate-200 transition-all duration-100">
                <Video width={15} height={15} />
                <p>Onboarding</p>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-5 font-bold">
              <div className="flex gap-1 items-center cursor-pointer hover:bg-slate-200 transition-all duration-100">
                <House width={15} height={15} />
                <p>Dashboard</p>
              </div>
              <div className="flex gap-1 items-center cursor-pointer hover:bg-slate-200 transition-all duration-100r">
                <ChartPie width={15} height={15} />
                <p>Campaigns</p>
              </div>
              <div className="flex gap-1 items-center cursor-pointer hover:bg-slate-200 transition-all duration-100">
                <MessageCircle width={15} height={15} />
                <p>Chat</p>
              </div>
              <div className="flex gap-1 items-center cursor-pointer hover:bg-slate-200 transition-all duration-100">
                <Headset width={15} height={15} />
                <p>Support Center</p>
              </div>
              <div className="flex gap-1 items-center cursor-pointer hover:bg-slate-200 transition-all duration-100">
                <CircleDollarSign width={15} height={15} />
                <p>Leads</p>
              </div>
              <div className="flex gap-1 items-center cursor-pointer hover:bg-slate-200 transition-all duration-100">
                <Folder width={15} height={15} />
                <p>Archive</p>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-5">
        <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-300 to-lime-300 rounded-md py-3 text-[15px] cursor-pointer text-black">
          <Chrome width={30} height={30} />
          <div>
            <p className="font-bold">Get the extension</p>
            <p className="underline">Install now</p>
          </div>
        </div>
        <a target="_blank" className="text-center" href="https://dribbble.com/shots/22090352-Campaigns-Dashboard">Desing</a>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
