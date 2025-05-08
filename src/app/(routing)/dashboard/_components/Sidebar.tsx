"use client";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ROUTES = [
  {
    name: "لوحة التحكم",
    path: "/dashboard",
  },
  {
    name: "إدارة المنتجات",
    path: "/dashboard/products",
  },
  {
    name: "الفئات",
    path: "/dashboard/categories",
  },
  {
    name: "الطلبات",
    path: "/dashboard/orders",
  },
];

export default function Sidebar() {
  const path = usePathname();
  console.log(path);
  return (
    <aside className="relative h-screen w-64 border-e">
      <div className="border-b h-14 text-center grid place-content-center">
        <p className="font-biocats text-3xl leading-0">VIXALWEB</p>
      </div>

      <ul className="mt-10 space-y-5 pl-10 font-mono text-xl ">
        {ROUTES.map((item, index) => (
          <li
            key={item.name + item.path + index}
            className={clsx("opacity-75", {
              "bg-primary rounded-l-full py-3 text-white": path == item.path,
            })}
          >
            <Link className="pr-6" href={item.path}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="absolute bottom-2 flex items-center justify-between w-full pr-5">
        <div className="flex items-center gap-2">
          <div className="size-12 overflow-hidden rounded-full">
            <Image
              className="h-full w-full object-cover"
              alt=""
              height={100}
              width={100}
              src={"/images/test.png"}
            />
          </div>
          <div>
            <p className="text-nowraps font-mono text-[16px] leading-3">
              Said Bennana
            </p>
            <span className="text-mono text-xs opacity-50">admin</span>
          </div>
        </div>
        <Button variant={"ghost"} className="rotate-180 cursor-pointer">
          <LogOut />
        </Button>
      </div>
    </aside>
  );
}
