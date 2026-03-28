import { AppSidebar } from "@/components/localComponents/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider className="relative w-full flex ">
      <AppSidebar />
      <div className="md:hidden absolute z-10">
        <SidebarTrigger />
      </div>
      <div className="md:px-10 md:py-5 w-full">
        <div className="md:p-6 px-2 pt-10 backdrop-blur-2xl bg-[#00000073] rounded-2xl">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
}
