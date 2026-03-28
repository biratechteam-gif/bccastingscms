"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from "@/components/ui/table";
import { EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

/* ----------------------------------------
 * Mock Data — Talent/Recruiter Requests
 * -------------------------------------- */
const requests = [
  {
    id: "1",
    talent: "Amara Okonkwo",
    role: "Senior UI Designer",
    recruiter: "TalentBridge Africa",
    dateSubmitted: "2024-11-12",
    dateResolved: "2025-01-18",
    type: "client",
    status: "approved",
  },
  {
    id: "2",
    talent: "Femi Adeyemi",
    role: "Backend Engineer",
    recruiter: "Prestige Talent Group",
    dateSubmitted: "2024-10-03",
    dateResolved: null,
    type: "recruiter",
    status: "pending",
  },
  {
    id: "3",
    talent: "Ngozi Eze",
    role: "Product Manager",
    recruiter: "Desert Recruit Co.",
    dateSubmitted: "2024-09-21",
    dateResolved: "2025-02-01",
    type: "client",
    status: "approved",
  },
  {
    id: "4",
    talent: "Bola Tinubu",
    role: "Data Scientist",
    recruiter: "EuroHaus Talent",
    dateSubmitted: "2024-12-01",
    dateResolved: null,
    type: "recruiter",
    status: "pending",
  },
  {
    id: "5",
    talent: "Chidi Okeke",
    role: "DevOps Engineer",
    recruiter: "Summit Talent",
    dateSubmitted: "2024-08-15",
    dateResolved: "2024-12-22",
    type: "client",
    status: "approved",
  },
  {
    id: "6",
    talent: "Yemi Alade",
    role: "Brand Strategist",
    recruiter: "Elite Drive Staffing",
    dateSubmitted: "2024-11-04",
    dateResolved: null,
    type: "client",
    status: "rejected",
  },
  {
    id: "7",
    talent: "Kolade James",
    role: "Mobile Developer",
    recruiter: "Urban Talent",
    dateSubmitted: "2024-10-19",
    dateResolved: null,
    type: "recruiter",
    status: "pending",
  },
  {
    id: "8",
    talent: "Sade Adu",
    role: "Creative Director",
    recruiter: "Prime Recruit",
    dateSubmitted: "2024-09-09",
    dateResolved: "2024-12-03",
    type: "recruiter",
    status: "approved",
  },
  {
    id: "9",
    talent: "Emeka Nwosu",
    role: "Fullstack Developer",
    recruiter: "Redline Careers",
    dateSubmitted: "2024-11-27",
    dateResolved: null,
    type: "client",
    status: "pending",
  },
  {
    id: "10",
    talent: "Tola Adewale",
    role: "Project Lead",
    recruiter: "Frontier Talent",
    dateSubmitted: "2024-08-02",
    dateResolved: "2024-10-30",
    type: "recruiter",
    status: "approved",
  },
];

/* ----------------------------------------
 * Component
 * -------------------------------------- */
export default function RequestTable() {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 backdrop-blur">
      <Table>
        <TableHeader>
          <TableRow className="border-neutral-800 text-xs text-neutral-500">
            <TableHead className="py-4 px-5">Talent &amp; Role</TableHead>
            <TableHead>Recruiter</TableHead>
            <TableHead>Type &amp; Dates</TableHead>
            <TableHead className="w-10 text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {requests.map((r) => (
            <TableRow
              key={r.id}
              className="border-neutral-800 hover:bg-neutral-900/50 transition-colors"
            >
              {/* Talent & Role */}
              <TableCell className="px-5 py-4 space-y-1">
                <p className="font-medium text-white">{r.talent}</p>
                <p className="text-xs text-neutral-500">{r.role}</p>
              </TableCell>

              {/* Recruiter */}
              <TableCell className="px-4 py-4 text-sm text-neutral-300">
                {r.recruiter}
              </TableCell>

              {/* Type & Dates */}
              <TableCell className="px-4 py-4 space-y-1">
                <TypeBadge type={r.type} />
                <p className="text-xs text-neutral-500 mt-1">
                  {formatDate(r.dateSubmitted)} —{" "}
                  {r.dateResolved ? formatDate(r.dateResolved) : "Ongoing"}
                </p>
              </TableCell>

              {/* Actions & Status */}
              <TableCell className="px-4 py-4 text-right">
                <div className="flex justify-end items-center gap-3">
                  <StatusBadge status={r.status} />
                  <DropdownMenu>
                    <DropdownMenuTrigger className="text-neutral-400 hover:text-white">
                      <EllipsisVertical className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View</DropdownMenuItem>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-500">
                        Remove
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

/* ----------------------------------------
 * Helpers
 * -------------------------------------- */
function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    approved: "bg-[#B8962E]/10 text-[#E6C76A]",
    pending: "bg-neutral-500/10 text-neutral-300",
    rejected: "bg-red-500/10 text-red-400",
  };

  return (
    <span
      className={cn(
        "rounded-md px-2 py-1 text-xs font-medium capitalize",
        styles[status] ?? styles.pending,
      )}
    >
      {status}
    </span>
  );
}

function TypeBadge({ type }: { type: string }) {
  const styles: Record<string, string> = {
    client: "bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20",
    recruiter: "bg-neutral-700/30 text-neutral-400 border border-neutral-700",
  };

  return (
    <span
      className={cn(
        "rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
        styles[type] ?? styles.recruiter,
      )}
    >
      {type}
    </span>
  );
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
