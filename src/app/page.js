"use client";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { InventoryContext } from "@/context/InventoryContext";
import CheckIn from "@/components/CheckIn";
export default function Home() {
  const {showCheckIn, setShowCheckIn} = useContext(InventoryContext);
  return (
    <main className="flex min-h-screen flex-col items-center relative z-0">
      <header className="px-12 py-4 w-full bg-blue-500 flex justify-between items-center">
      <h2 className="font-semibold text-xl text-white">Home</h2>
      <Button variant='outline'className="font-semibold" onClick={()=>setShowCheckIn(!showCheckIn)}>
        Check In
      </Button>
      </header>
      {showCheckIn && <CheckIn/>}
    </main>
  );
}
