"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function CreateDialog() {
  const [role, setRole] = React.useState("");
  const [chassis, setChassis] = React.useState("");
  const [step, setStep] = React.useState(1);

  // Simulated fetched vehicle data
  const vehicleData =
    chassis.length === 17
      ? {
          color: "Pearl White",
          hex: "#F8F8F8",
          type: "Toyota Corolla",
        }
      : null;

  React.useEffect(() => {
    if (chassis.length === 17) {
      setStep(2);
    } else {
      setStep(1);
    }
  }, [chassis]);

  return (
    <Tabs defaultValue="user" className="mt-6">
      {/* Tabs */}
      <TabsList className="grid grid-cols-2 bg-neutral-900">
        <TabsTrigger
          value="user"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#26ba8160] data-[state=active]:via-[#2bd3c660] data-[state=active]:to-[#2bd4b460]"
        >
          User
        </TabsTrigger>
        <TabsTrigger
          value="vehicle"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#26ba8160] data-[state=active]:via-[#2bd3c660] data-[state=active]:to-[#2bd4b460]"
        >
          Vehicle
        </TabsTrigger>
      </TabsList>

      {/* =============================== */}
      {/* USER TAB */}
      {/* =============================== */}
      <TabsContent value="user" className="mt-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Name</Label>
            <Input placeholder="Full name" />
          </div>

          <div className="space-y-2">
            <Label>Role</Label>
            <Select onValueChange={setRole}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dealer">Dealer</SelectItem>
                <SelectItem value="boy">Boy</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="secretary">Secretary</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* If role is Boy → show Dealer */}
          {role === "boy" && (
            <div className="space-y-2">
              <Label>Dealer</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select dealer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dealer1">Dealer A</SelectItem>
                  <SelectItem value="dealer2">Dealer B</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="space-y-2">
            <Label>Address</Label>
            <Input placeholder="Address" />
          </div>

          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" placeholder="Email address" />
          </div>

          <div className="space-y-2">
            <Label>Phone Number</Label>
            <Input placeholder="Phone number" />
          </div>

          <div className="space-y-2">
            <Label>Sex</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select sex" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>NIN</Label>
            <Input placeholder="National ID Number" />
          </div>

          <div className="space-y-2">
            <Label>Branch</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select branch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="euro65">Euro 65</SelectItem>
                <SelectItem value="corolla1">Corolla 1</SelectItem>
                <SelectItem value="corolla2">Corolla 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end">
          <Button variant="accent">Save User</Button>
        </div>
      </TabsContent>

      {/* =============================== */}
      {/* VEHICLE TAB */}
      {/* =============================== */}
      <TabsContent value="vehicle" className="mt-6 space-y-6">
        {/* Step indicator */}
        <div className="flex items-center gap-4 text-sm">
          <div
            className={cn(
              "px-3 py-1 rounded-full border text-xs",
              step === 1
                ? "border-[#2bd3c6] text-[#2bd3c6]"
                : "border-neutral-700 text-neutral-500",
            )}
          >
            Step 1: Chassis
          </div>
          <div
            className={cn(
              "px-3 py-1 rounded-full border text-xs",
              step === 2
                ? "border-[#2bd3c6] text-[#2bd3c6]"
                : "border-neutral-700 text-neutral-500",
            )}
          >
            Step 2: Details
          </div>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Chassis Number</Label>
              <Input
                maxLength={17}
                value={chassis}
                onChange={(e) => setChassis(e.target.value)}
                placeholder="Enter 17 character chassis number"
              />
            </div>

            <Button variant="accent" disabled={chassis.length !== 17}>
              Next
            </Button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && vehicleData && (
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Vehicle Type</Label>
              <Input value={vehicleData.type} disabled />
            </div>

            <div className="space-y-2">
              <Label>Vehicle Color</Label>
              <div className="flex items-center gap-3">
                <Input value={vehicleData.color} disabled />
                <div
                  className="w-8 h-8 rounded border"
                  style={{ backgroundColor: vehicleData.hex }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Dealer</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select dealer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dealer1">Dealer A</SelectItem>
                  <SelectItem value="dealer2">Dealer B</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Park</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select park" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="park1">Park A</SelectItem>
                  <SelectItem value="park2">Park B</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="col-span-2 flex justify-end">
              <Button variant="accent">Save Vehicle</Button>
            </div>
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
}
