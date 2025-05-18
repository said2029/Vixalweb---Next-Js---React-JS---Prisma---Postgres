"use client";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
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
      <div className="grid h-14 place-content-center border-b text-center">
        <p className="font-biocats text-3xl leading-0">VIXALWEB</p>
      </div>

      <ul className="mt-10 space-y-5 pl-10 font-mono text-xl">
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

      <div className="absolute bottom-2 flex w-full items-center justify-between pr-5">
        <div className="flex items-center gap-2">
          <UserButton/>
        </div>
      </div>
    </aside>
  );
}
