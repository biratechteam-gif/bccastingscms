"use client";

import { useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from "@/components/ui/table";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  FileCheck,
  TrendingUp,
  Search,
  Mail,
  Phone,
  MapPin,
  Building2,
  Star,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ----------------------------------------
 * Roles
 * -------------------------------------- */
export const roles = [
  "Actor",
  "Model",
  "Musical Artist",
  "Dancer",
  "Hostess",
  "Voice Over Artist",
  "Fashion Designer",
  "Presenter",
  "Influencer",
  "Script Writer",
  "Movie Producer",
  "Movie Director",
  "Graphics Designer",
  "Web Developer",
  "Digital Marketer",
  "Cinematographer",
  "Event Planner",
  "Driver",
];

/* ----------------------------------------
 * Types
 * -------------------------------------- */
type RequestType = "client" | "recruiter";

interface Request {
  id: string;
  talent: string;
  talentEmail: string;
  talentPhone: string;
  talentLocation: string;
  talentRole: string;
  talentSkills: string[];
  talentRating: number;
  recruiter: string;
  recruiterEmail: string;
  recruiterPhone: string;
  recruiterCompany: string;
  recruiterLocation: string;
  role: string;
  type: RequestType;
  dateSubmitted: string;
  notes: string;
}

/* ----------------------------------------
 * Mock Data
 * -------------------------------------- */
const requests: Request[] = [
  {
    id: "1",
    talent: "Amara Okonkwo",
    talentEmail: "amara.okonkwo@gmail.com",
    talentPhone: "+234 803 112 4455",
    talentLocation: "Lagos, Nigeria",
    talentRole: "Actor",
    talentSkills: ["Stage Acting", "Voice Modulation", "Improvisation"],
    talentRating: 4.8,
    recruiter: "TalentBridge Africa",
    recruiterEmail: "hire@talentbridge.africa",
    recruiterPhone: "+234 901 223 3344",
    recruiterCompany: "TalentBridge Africa Ltd.",
    recruiterLocation: "Abuja, Nigeria",
    role: "Actor",
    type: "client",
    dateSubmitted: "2024-11-12",
    notes: "Client urgently needs talent for a Nollywood feature film.",
  },
  {
    id: "2",
    talent: "Femi Adeyemi",
    talentEmail: "femi.adeyemi@outlook.com",
    talentPhone: "+234 706 445 8821",
    talentLocation: "Port Harcourt, Nigeria",
    talentRole: "Cinematographer",
    talentSkills: ["ARRI Alexa", "Color Grading", "Drone Ops"],
    talentRating: 4.5,
    recruiter: "Prestige Talent Group",
    recruiterEmail: "ops@prestigetalent.ng",
    recruiterPhone: "+234 812 009 3312",
    recruiterCompany: "Prestige Talent Group",
    recruiterLocation: "Lagos, Nigeria",
    role: "Cinematographer",
    type: "recruiter",
    dateSubmitted: "2024-10-03",
    notes: "Recruiter seeking cinematographer for a music video production.",
  },
  {
    id: "3",
    talent: "Ngozi Eze",
    talentEmail: "ngozi.eze@gmail.com",
    talentPhone: "+234 815 772 0034",
    talentLocation: "Enugu, Nigeria",
    talentRole: "Model",
    talentSkills: ["Editorial", "Runway", "Commercial"],
    talentRating: 4.9,
    recruiter: "Desert Recruit Co.",
    recruiterEmail: "contact@desertrecruit.com",
    recruiterPhone: "+234 701 338 9900",
    recruiterCompany: "Desert Recruit Co.",
    recruiterLocation: "Kano, Nigeria",
    role: "Model",
    type: "client",
    dateSubmitted: "2024-09-21",
    notes: "Client needs model for fashion week campaign shoot.",
  },
  {
    id: "4",
    talent: "Bola Tinubu",
    talentEmail: "bola.t@proton.me",
    talentPhone: "+234 809 554 2231",
    talentLocation: "Ibadan, Nigeria",
    talentRole: "Digital Marketer",
    talentSkills: ["SEO", "Meta Ads", "Content Strategy"],
    talentRating: 4.3,
    recruiter: "EuroHaus Talent",
    recruiterEmail: "talent@eurohaus.ng",
    recruiterPhone: "+234 903 667 1122",
    recruiterCompany: "EuroHaus Talent",
    recruiterLocation: "Lagos, Nigeria",
    role: "Digital Marketer",
    type: "recruiter",
    dateSubmitted: "2024-12-01",
    notes: "Recruiter sourcing digital marketer for brand expansion campaign.",
  },
  {
    id: "5",
    talent: "Chidi Okeke",
    talentEmail: "chidi.okeke@devmail.io",
    talentPhone: "+234 812 330 7765",
    talentLocation: "Owerri, Nigeria",
    talentRole: "Web Developer",
    talentSkills: ["Next.js", "Tailwind CSS", "Supabase"],
    talentRating: 4.7,
    recruiter: "Summit Talent",
    recruiterEmail: "info@summittalent.ng",
    recruiterPhone: "+234 701 992 0043",
    recruiterCompany: "Summit Talent Solutions",
    recruiterLocation: "Lagos, Nigeria",
    role: "Web Developer",
    type: "client",
    dateSubmitted: "2024-08-15",
    notes: "Fast-track placement for agency website rebuild.",
  },
  {
    id: "6",
    talent: "Yemi Alade",
    talentEmail: "yemi.alade@creative.ng",
    talentPhone: "+234 808 112 9934",
    talentLocation: "Lagos, Nigeria",
    talentRole: "Musical Artist",
    talentSkills: ["Afrobeats", "Live Performance", "Songwriting"],
    talentRating: 4.9,
    recruiter: "Elite Drive Staffing",
    recruiterEmail: "hello@elitedrive.ng",
    recruiterPhone: "+234 902 445 8870",
    recruiterCompany: "Elite Drive Staffing Ltd.",
    recruiterLocation: "Abuja, Nigeria",
    role: "Musical Artist",
    type: "client",
    dateSubmitted: "2024-11-04",
    notes: "Client needs headline artist for corporate end-of-year event.",
  },
  {
    id: "7",
    talent: "Kolade James",
    talentEmail: "kolade.dev@gmail.com",
    talentPhone: "+234 706 882 1103",
    talentLocation: "Lagos, Nigeria",
    talentRole: "Graphics Designer",
    talentSkills: ["Illustrator", "Brand Identity", "Motion Graphics"],
    talentRating: 4.6,
    recruiter: "Urban Talent",
    recruiterEmail: "ops@urbantalent.ng",
    recruiterPhone: "+234 810 009 4455",
    recruiterCompany: "Urban Talent Agency",
    recruiterLocation: "Lagos, Nigeria",
    role: "Graphics Designer",
    type: "recruiter",
    dateSubmitted: "2024-10-19",
    notes: "Recruiter sourcing designer for FMCG rebranding project.",
  },
  {
    id: "8",
    talent: "Sade Adu",
    talentEmail: "sade.adu@mediaworks.ng",
    talentPhone: "+234 813 774 0091",
    talentLocation: "Lagos, Nigeria",
    talentRole: "Presenter",
    talentSkills: ["Live TV", "Teleprompter", "Event Hosting"],
    talentRating: 5.0,
    recruiter: "Prime Recruit",
    recruiterEmail: "info@primerecruit.ng",
    recruiterPhone: "+234 901 228 3309",
    recruiterCompany: "Prime Recruit NG",
    recruiterLocation: "Lagos, Nigeria",
    role: "Presenter",
    type: "recruiter",
    dateSubmitted: "2024-09-09",
    notes: "High-profile placement for national television network.",
  },
  {
    id: "9",
    talent: "Emeka Nwosu",
    talentEmail: "emeka.nwosu@dev.io",
    talentPhone: "+234 706 339 1188",
    talentLocation: "Enugu, Nigeria",
    talentRole: "Movie Director",
    talentSkills: ["Narrative Film", "Set Management", "Storyboarding"],
    talentRating: 4.4,
    recruiter: "Redline Careers",
    recruiterEmail: "team@redlinecareers.ng",
    recruiterPhone: "+234 812 556 2201",
    recruiterCompany: "Redline Careers Ltd.",
    recruiterLocation: "Lagos, Nigeria",
    role: "Movie Director",
    type: "client",
    dateSubmitted: "2024-11-27",
    notes: "Client producing an original series and needs a seasoned director.",
  },
  {
    id: "10",
    talent: "Tola Adewale",
    talentEmail: "tola.adewale@pm.me",
    talentPhone: "+234 803 991 4450",
    talentLocation: "Abuja, Nigeria",
    talentRole: "Event Planner",
    talentSkills: ["Logistics", "Vendor Management", "Décor"],
    talentRating: 4.7,
    recruiter: "Frontier Talent",
    recruiterEmail: "contact@frontiertalent.ng",
    recruiterPhone: "+234 901 667 3392",
    recruiterCompany: "Frontier Talent Group",
    recruiterLocation: "Abuja, Nigeria",
    role: "Event Planner",
    type: "recruiter",
    dateSubmitted: "2024-08-02",
    notes: "Placed for a government gala with 2,000+ attendees.",
  },
  {
    id: "11",
    talent: "Aisha Bello",
    talentEmail: "aisha.bello@stylemail.ng",
    talentPhone: "+234 811 009 3310",
    talentLocation: "Kano, Nigeria",
    talentRole: "Fashion Designer",
    talentSkills: ["Haute Couture", "Pattern Making", "Textile Sourcing"],
    talentRating: 4.6,
    recruiter: "NorthStar Talent",
    recruiterEmail: "info@northstartalent.ng",
    recruiterPhone: "+234 703 445 8821",
    recruiterCompany: "NorthStar Talent Ltd.",
    recruiterLocation: "Kano, Nigeria",
    role: "Fashion Designer",
    type: "client",
    dateSubmitted: "2025-01-08",
    notes:
      "Client launching a ready-to-wear collection for Lagos Fashion Week.",
  },
  {
    id: "12",
    talent: "Dayo Fasanya",
    talentEmail: "dayo.fasanya@voicemail.ng",
    talentPhone: "+234 909 223 7712",
    talentLocation: "Lagos, Nigeria",
    talentRole: "Voice Over Artist",
    talentSkills: ["Commercial VO", "Animation", "Audiobooks"],
    talentRating: 4.8,
    recruiter: "SoundHouse Agency",
    recruiterEmail: "cast@soundhouse.ng",
    recruiterPhone: "+234 802 334 5566",
    recruiterCompany: "SoundHouse Agency",
    recruiterLocation: "Lagos, Nigeria",
    role: "Voice Over Artist",
    type: "recruiter",
    dateSubmitted: "2025-02-14",
    notes: "Recruiter needs VO talent for a bank's national radio campaign.",
  },
];

/* ----------------------------------------
 * Stats
 * -------------------------------------- */
const stats = [
  {
    label: "Total Requests",
    value: requests.length,
    icon: FileCheck,
    color: "#D4AF37",
    border: "border-[#B8962E]/30",
    glow: "#B8962E",
  },
  {
    label: "Active Talents",
    value: 48,
    icon: Users,
    color: "#E6C76A",
    border: "border-[#E6C76A]/20",
    glow: "#E6C76A",
  },
  {
    label: "Open Roles",
    value: roles.length,
    icon: Briefcase,
    color: "#D4AF37",
    border: "border-[#D4AF37]/20",
    glow: "#D4AF37",
  },
  {
    label: "Recruiters",
    value: new Set(requests.map((r) => r.recruiter)).size,
    icon: TrendingUp,
    color: "#B8962E",
    border: "border-[#B8962E]/20",
    glow: "#B8962E",
  },
];

/* ----------------------------------------
 * Page
 * -------------------------------------- */
export default function Page() {
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");

  const filtered = useMemo(() => {
    return requests.filter((r) => {
      const q = search.toLowerCase();
      const matchSearch =
        !search ||
        r.talent.toLowerCase().includes(q) ||
        r.recruiter.toLowerCase().includes(q) ||
        r.role.toLowerCase().includes(q);
      const matchType = typeFilter === "all" || r.type === typeFilter;
      const matchRole = roleFilter === "all" || r.role === roleFilter;
      return matchSearch && matchType && matchRole;
    });
  }, [search, typeFilter, roleFilter]);

  return (
    <div className="min-h-screen space-y-8 w-full">
      {/* ── Header ── */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-zinc-900 border border-[#B8962E]/20">
          <LayoutDashboard className="w-5 h-5 text-[#D4AF37]" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <div className="h-[2px] w-28 bg-gradient-to-r from-[#D4AF37] to-transparent mt-1" />
          <p className="text-sm text-zinc-400 mt-1">
            Overview of talents, recruiters &amp; requests
          </p>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className={cn(
              "relative overflow-hidden rounded-xl border bg-zinc-900/60 backdrop-blur p-5",
              s.border,
            )}
          >
            <div
              className="absolute -top-6 -right-6 h-20 w-20 rounded-full opacity-15 blur-2xl"
              style={{ backgroundColor: s.glow }}
            />
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium mb-2">
                  {s.label}
                </p>
                <p
                  className="text-3xl font-bold tabular-nums"
                  style={{ color: s.color }}
                >
                  {s.value}
                </p>
              </div>
              <div
                className="p-2 rounded-lg"
                style={{ backgroundColor: s.color + "18" }}
              >
                <s.icon className="w-4 h-4" style={{ color: s.color }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Table Section ── */}
      <div className="space-y-4">
        {/* Section header + controls */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
          <div className="flex items-center gap-2">
            <span className="h-5 w-[3px] rounded-full bg-[#B8962E]/80" />
            <h2 className="text-base font-medium">Request History</h2>
            <span className="ml-1 rounded-md bg-[#B8962E]/10 border border-[#B8962E]/20 px-2 py-0.5 text-xs text-[#D4AF37]">
              {filtered.length}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
              <Input
                placeholder="Search talent, recruiter, role…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8 h-8 w-56 bg-zinc-900 border-zinc-800 text-xs"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>

            {/* Role filter */}
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="h-8 w-44 bg-zinc-900 border-zinc-800 text-xs">
                <SelectValue placeholder="All Roles" />
              </SelectTrigger>
              <SelectContent className="max-h-64">
                <SelectGroup>
                  <SelectItem value="all">All Roles</SelectItem>
                  {roles.map((r) => (
                    <SelectItem key={r} value={r}>
                      {r}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* Type filter */}
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="h-8 w-36 bg-zinc-900 border-zinc-800 text-xs">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="client">Client</SelectItem>
                  <SelectItem value="recruiter">Recruiter</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 backdrop-blur overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-neutral-800 text-xs text-neutral-500 hover:bg-transparent">
                <TableHead className="py-4 px-5">Talent</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Recruiter</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead className="text-right pr-5">Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center py-14 text-zinc-600 text-sm"
                  >
                    No requests match your filters.
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((r) => (
                  <TableRow
                    key={r.id}
                    onClick={() => setSelectedRequest(r)}
                    className="border-neutral-800 hover:bg-[#B8962E]/5 transition-colors cursor-pointer"
                  >
                    <TableCell className="px-5 py-3.5 font-medium text-white text-sm">
                      {r.talent}
                    </TableCell>
                    <TableCell className="px-4 py-3.5 text-sm text-zinc-400">
                      {r.role}
                    </TableCell>
                    <TableCell className="px-4 py-3.5 text-sm text-zinc-400">
                      {r.recruiter}
                    </TableCell>
                    <TableCell className="px-4 py-3.5 text-xs text-zinc-500">
                      {formatDate(r.dateSubmitted)}
                    </TableCell>
                    <TableCell className="px-4 py-3.5 text-right pr-5">
                      <TypeBadge type={r.type} />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* ── Detail Dialog ── */}
      <Dialog
        open={!!selectedRequest}
        onOpenChange={(open) => !open && setSelectedRequest(null)}
      >
        <DialogContent className="max-w-2xl bg-zinc-950 border border-zinc-800 p-0 overflow-hidden">
          {selectedRequest && (
            <>
              <div className="h-1.5 w-full bg-gradient-to-r from-[#B8962E] via-[#D4AF37] to-[#E6C76A]" />

              <div className="p-6 space-y-5">
                <DialogHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <DialogTitle className="text-lg font-semibold text-white">
                        Request Details
                      </DialogTitle>
                      <p className="text-xs text-zinc-500 mt-0.5">
                        ID #{selectedRequest.id} · Submitted{" "}
                        {formatDate(selectedRequest.dateSubmitted)}
                      </p>
                    </div>
                    <TypeBadge type={selectedRequest.type} />
                  </div>
                </DialogHeader>

                {/* Role strip */}
                <div className="rounded-lg border border-[#B8962E]/20 bg-[#B8962E]/5 px-4 py-3 flex items-center gap-3">
                  <Briefcase className="h-4 w-4 text-[#D4AF37] shrink-0" />
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest">
                      Role Requested
                    </p>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      {selectedRequest.role}
                    </p>
                  </div>
                </div>

                {/* Talent + Recruiter cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Talent */}
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 space-y-3">
                    <div className="flex items-center gap-2 pb-2.5 border-b border-zinc-800">
                      <div className="h-6 w-6 rounded-full bg-[#D4AF37]/15 flex items-center justify-center">
                        <Users className="h-3 w-3 text-[#D4AF37]" />
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                        Talent
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        {selectedRequest.talent}
                      </p>
                      <p className="text-xs text-zinc-500 mt-0.5">
                        {selectedRequest.talentRole}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <InfoRow
                        icon={Mail}
                        value={selectedRequest.talentEmail}
                      />
                      <InfoRow
                        icon={Phone}
                        value={selectedRequest.talentPhone}
                      />
                      <InfoRow
                        icon={MapPin}
                        value={selectedRequest.talentLocation}
                      />
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {selectedRequest.talentSkills.map((sk) => (
                        <span
                          key={sk}
                          className="rounded-md bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-300"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-[#D4AF37] fill-[#D4AF37]" />
                      <span className="text-xs font-semibold text-[#D4AF37]">
                        {selectedRequest.talentRating}
                      </span>
                      <span className="text-xs text-zinc-600">/ 5.0</span>
                    </div>
                  </div>

                  {/* Recruiter */}
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 space-y-3">
                    <div className="flex items-center gap-2 pb-2.5 border-b border-zinc-800">
                      <div className="h-6 w-6 rounded-full bg-[#B8962E]/15 flex items-center justify-center">
                        <Building2 className="h-3 w-3 text-[#B8962E]" />
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#B8962E]">
                        Recruiter
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        {selectedRequest.recruiter}
                      </p>
                      <p className="text-xs text-zinc-500 mt-0.5">
                        {selectedRequest.recruiterCompany}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <InfoRow
                        icon={Mail}
                        value={selectedRequest.recruiterEmail}
                      />
                      <InfoRow
                        icon={Phone}
                        value={selectedRequest.recruiterPhone}
                      />
                      <InfoRow
                        icon={MapPin}
                        value={selectedRequest.recruiterLocation}
                      />
                    </div>
                  </div>
                </div>

                {/* Notes */}
                {selectedRequest.notes && (
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-3">
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">
                      Notes
                    </p>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {selectedRequest.notes}
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

/* ----------------------------------------
 * Sub-components
 * -------------------------------------- */
function InfoRow({
  icon: Icon,
  value,
}: {
  icon: React.ElementType;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2 text-xs text-zinc-400">
      <Icon className="h-3 w-3 text-zinc-600 shrink-0" />
      <span className="truncate">{value}</span>
    </div>
  );
}

function TypeBadge({ type }: { type: RequestType }) {
  const styles: Record<RequestType, string> = {
    client: "bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20",
    recruiter: "bg-zinc-700/30 text-zinc-400 border border-zinc-700",
  };
  return (
    <span
      className={cn(
        "rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
        styles[type],
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
