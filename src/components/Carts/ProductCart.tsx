import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

export default function ProductCart() {
  return (
    <div className="rounded-[10px] border bg-gray-50 p-3">
      <div className="w-full overflow-hidden rounded-[10px]">
        <Image
          className="h-full w-full object-cover"
          width={300}
          height={300}
          alt=""
          src={"/images/test.png"}
        />
      </div>
      <h3 className="my-3 font-sans text-xl">شريط تمرير أفقي لبطاقات </h3>
      <div className="flex items-center justify-between gap-3">
        <Button className="h-10 grow rounded-full relative">
          <span>عرض التفاصيل</span>
          <span className="aspect-square h-full bg-white text-primary rounded-full p-2 px-5 absolute right-0">3099$</span>
        </Button>
        <Button className="size-10 shrink-0 rounded-full">
          {" "}
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
}
