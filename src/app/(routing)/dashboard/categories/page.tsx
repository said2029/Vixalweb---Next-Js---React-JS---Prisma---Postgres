import { Button } from "@/components/ui/button";
import { Plus, SquarePen, Trash2 } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <main>
      <div className="flex items-center justify-between">
        <h2 className="font-mono text-2xl">الفئات (23)</h2>

        <Button className="cursor-pointer !rounded-full" size={"lg"}>
          <Plus /> Add Category
        </Button>
      </div>

      <div className="mt-10">
        {/* card */}
        <div className="relative w-fit rounded-sm border bg-gray-50 p-2">
          <div className="flex items-center gap-1">
            <Button
              size={"icon"}
              className="size-8 cursor-pointer rounded-full bg-white text-purple-400 hover:bg-white/55"
            >
              <SquarePen />
            </Button>
            <Button
              size={"icon"}
              className="size-8 cursor-pointer rounded-full bg-white text-red-400 hover:bg-white/55"
            >
              <Trash2 />
            </Button>
          </div>
          <p className="mt-3 font-mono font-medium">شريط تمرير أفقي لبطاقات </p>
        </div>
      </div>
    </main>
  );
}
