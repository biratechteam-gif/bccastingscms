"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Home,
  Users,
  Briefcase,
  Search,
  Plus,
  User,
  SquareUserRound,
  FileText,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/localComponents/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import CreateDialog from "./CreateDialog";

export function AppSidebar() {
  return (
    <Sidebar className="w-72 border-r border-neutral-800">
      <SidebarContent className="flex h-full flex-col justify-between">
        {/* TOP */}
        <div>
          {/* Brand */}
          <SidebarHeader className="px-6 py-6 border-b border-neutral-800">
            <Link href="/home" className="flex items-center gap-3">
              <Logo />
            </Link>
          </SidebarHeader>

          {/* Quick actions panel */}
          <div className="px-6 py-4 space-y-3 border-b border-neutral-800">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
              <Input
                placeholder="Search talents, recruiters…"
                className="pl-9 bg-neutral-900 border-neutral-800 text-sm"
              />
            </div>
            <Dialog>
              <DialogTrigger className="w-full">
                <Button variant="accent" size="sm" className="w-full  ">
                  <Plus className="h-4 w-4" />
                  Add New Record
                </Button>
              </DialogTrigger>
              <DialogContent>
                <CreateDialog />
              </DialogContent>
            </Dialog>
          </div>

          {/* Navigation */}
          <div className="px-4 py-4 space-y-1">
            {/* Overview */}
            <SidebarGroup>
              <SidebarGroupLabel className="px-2 text-xs font-medium text-neutral-500">
                Overview
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <NavItem href="/home" icon={Home} label="Dashboard" />
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Talent Management */}
            <SidebarGroup>
              <SidebarGroupLabel className="px-2 text-xs font-medium text-neutral-500">
                Talent Management
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <NavItem
                    href="/category/recruiters"
                    icon={Users}
                    label="Recruiters"
                  />
                  <NavItem
                    href="/category/talents"
                    icon={User}
                    label="Talents"
                  />
                  <NavItem
                    href="/category/jobs"
                    icon={Briefcase}
                    label="Job Postings"
                  />
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Administration */}
            <SidebarGroup>
              <SidebarGroupLabel className="px-2 text-xs font-medium text-neutral-500">
                Administration
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <NavItem
                    href="/category/requests"
                    icon={FileText}
                    label="Requests"
                  />
                  <NavItem
                    href="/category/admin"
                    icon={SquareUserRound}
                    label="Admins"
                  />
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </div>
        </div>

        {/* BOTTOM USER */}
        <div className="px-6 py-4 border-t border-neutral-800">
          <div className="flex items-center gap-3">
            <Image
              src="/avatar.png"
              alt="User avatar"
              width={36}
              height={36}
              className="rounded-md"
            />
            <div className="leading-tight">
              <p className="text-sm font-medium text-white">Admin User</p>
              <p className="text-xs text-neutral-500">admin@bccastings.com</p>
            </div>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

/* ----------------------------------------
 * Nav Item
 * -------------------------------------- */
function NavItem({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        className="
          group
          relative
          rounded-md
          px-3
          py-2.5
          text-sm
          text-neutral-300
          hover:bg-neutral-900
          hover:text-white
        "
      >
        <Link href={href} className="flex items-center gap-3">
          {/* Active indicator */}
          <span className="absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 bg-transparent group-data-[active=true]:bg-[#D4AF37]" />

          <Icon className="h-4 w-4 text-neutral-400 group-hover:text-[#E6C76A]" />
          <span>{label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
