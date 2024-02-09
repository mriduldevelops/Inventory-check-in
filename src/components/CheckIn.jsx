"use client";
import { useContext } from "react";
import { InventoryContext } from "@/context/InventoryContext";
import { Cross1Icon, PlusIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Bin from "../../public/bin.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Products from "./Products";

function CheckIn() {
  const { showCheckIn, setShowCheckIn } = useContext(InventoryContext);
  return (
    <div className="p-4 min-h-screen min-w-full absolute bg-[#0000008e] z-1 flex justify-center">
      <div className="py-5 px-8 min-h-[540px] min-w-[90%] bg-white rounded-lg flex overflow-hidden gap-8">
        <div className="w-[70%] h-[80%]">
          <h1 className="font-bold text-4xl mb-6">Check In/ Check Out</h1>
          <div className="grid w-full items-center gap-1.5 relative mb-8">
            <Label htmlFor="adminId">Admin/ ID</Label>
            <Input type="text" id="adminId" placeholder="#ASDF43RFFF" />
          </div>
          <Products />
          <div className="mt-6 grid gap-4 grid-cols-2">
            <div className="grid w-full items-center gap-1.5 relative">
              <Label htmlFor="quantity">Usage</Label>
              <Input type="text" id="quantity" placeholder="In Milk Analyzer" />
            </div>
            <div className="grid w-full items-center gap-1.5 relative">
              <Label htmlFor="products">Reason</Label>
              <Select>
                <SelectTrigger className="h-14">
                  <SelectValue
                    className="text-zinc-300 font-semibold"
                    placeholder="Products"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pen">Pen</SelectItem>
                  <SelectItem value="notebook">Notebook</SelectItem>
                  <SelectItem value="diary">Diary</SelectItem>
                  <SelectItem value="penicl">Pencil</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <h3 className="mt-4 m-2 text-zinc-400 font-bold">Description</h3>
          <div className="p-4 border rounded-md min-h-20">
            <p className="text-sm text-zinc-400 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              eaque vero autem similique nisi explicabo nemo debitis tempora
              voluptatem fugiat sapiente, impedit eveniet doloribus porro! Ipsam
              quibusdam vitae libero cumque!
            </p>
          </div>
        </div>
        <div className="w-[30%] h-[80% ] relative">
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-0"
            onClick={() => setShowCheckIn(!showCheckIn)}
          >
            <Cross1Icon className="h-4 w-4" />
          </Button>
          <div className="mt-12 flex justify-between">
            <h5>Serial numbers of Motor PCB</h5>
            <div>
              <Button variant="default" size="icon" className="h-6 mr-2">
                <PlusIcon className="h-4 w-4" />
              </Button>
              <Button variant="destructive" size="icon" className="h-6">
                <Image src={Bin} className="h-4 w-4" alt="delete-icon"/>
              </Button>
            </div>
          </div>
          <div className="mt-2 min-h-[77%] w-full border rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

export default CheckIn;
