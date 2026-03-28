"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Home } from "lucide-react";
import Image from "next/image";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import VehicleTable from "@/components/localComponents/FileTable";
import Link from "next/link";

export default function Page() {
  const dealers = [
    {
      name: "Gbagadi Gbugembi",
      email: "gbagadi@gmail.com",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600",
    },
    {
      name: "Ayo Martins",
      email: "ayo@gmail.com",
      image:
        "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=600",
    },
    {
      name: "Kola Ade",
      email: "kola@gmail.com",
      image:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600",
    },
    {
      name: "Gbagadi Gbugembi",
      email: "gbagadi@gmail.com",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600",
    },
    {
      name: "Ayo Martins",
      email: "ayo@gmail.com",
      image:
        "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=600",
    },
    {
      name: "Kola Ade",
      email: "kola@gmail.com",
      image:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600",
    },
    {
      name: "Kola Ade",
      email: "kola@gmail.com",
      image:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600",
    },
    {
      name: "Gbagadi Gbugembi",
      email: "gbagadi@gmail.com",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600",
    },
    {
      name: "Ayo Martins",
      email: "ayo@gmail.com",
      image:
        "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=600",
    },
    {
      name: "Kola Ade",
      email: "kola@gmail.com",
      image:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600",
    },
  ];

  return (
    <div className="min-h-screen space-y-8  w-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-zinc-900 border border-[#26ba81]/20">
            <Home className="w-5 h-5 text-[#26ba81]" />
          </div>

          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
            <div className="h-[2px] w-30 bg-gradient-to-r from-[#26ba81] to-transparent mt-1" />
            <p className="text-sm text-zinc-400 mt-1">
              Overview of vehicles, dealers & transactions
            </p>
          </div>
        </div>

        <Select>
          <SelectTrigger className="w-[200px] bg-zinc-900 border-zinc-800">
            <SelectValue placeholder="Select Park" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="euro65">Euro 65</SelectItem>
              <SelectItem value="corolla1">Corolla 1</SelectItem>
              <SelectItem value="corolla2">Corolla 2</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Content */}
      <Accordion type="multiple" defaultValue={["dealers", "transactions"]}>
        {/* Dealers */}
        <AccordionItem
          value="dealers"
          className="border border-zinc-800 rounded-xl px-4"
        >
          <AccordionTrigger className="relative text-base font-medium pl-3">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-[3px] rounded-full bg-[#26ba81]/60" />
            Dealers
          </AccordionTrigger>
          <AccordionContent>
            <ItemGroup className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[40vh] overflow-x-auto py-4">
              {dealers.map((user) => (
                <Link href={`/category/user/${user.email}`} key={user.email}>
                  <Item
                    variant="outline"
                    className=" min-w-[220px] bg-zinc-900 border-zinc-800 hover:border-[#2bd3c6]/40 hover:shadow-[0_0_0_1px_rgba(43,211,198,0.15)] transition "
                  >
                    <ItemMedia variant="image">
                      <Image
                        src={user.image}
                        alt={user.name}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle className="text-sm">{user.name}</ItemTitle>
                      <ItemDescription className="text-xs">
                        {user.email}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                </Link>
              ))}
            </ItemGroup>
          </AccordionContent>
        </AccordionItem>

        {/* Transactions */}
        <AccordionItem
          value="transactions"
          className="border border-zinc-800 rounded-xl px-4 mt-6"
        >
          <AccordionTrigger className="relative text-base font-medium pl-3">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-[3px] rounded-full bg-[#26ba81]/60" />
            Transaction History
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <VehicleTable />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
