
"use client";
import { Button } from "@/components/ui/button";
import { Plus, SquarePen, Trash2 } from "lucide-react";
import React from "react";
import ProductForm from "./_components/ProductForm";

export default function page() {
  return (
    <main>
      <div className="flex items-center justify-between">
        <h2 className="font-mono text-2xl">المنتجات (23)</h2>

        <ProductForm className="cursor-pointer !rounded-full flex items-center gap-2 bg-primary px-3 py-2 text-white">
          <Plus /> Add Product
        </ProductForm>
      </div>

      <div className="mt-10">
        {/* card */}
        <div className="relative w-fit rounded-sm border bg-gray-50 p-2">
          <div className="size-48 rounded-sm"></div>
          <p className="mt-3 font-mono font-medium">شريط تمرير أفقي لبطاقات </p>

          <div className="absolute top-2 right-2 flex items-center gap-1">
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
        </div>
      </div>
    </main>
  );
}
