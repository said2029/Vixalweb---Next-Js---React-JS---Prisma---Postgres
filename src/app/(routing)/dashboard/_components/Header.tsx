import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="flex h-14 w-full items-center justify-between border-b px-5">
      <div></div>
      <div className="">
        <div className="flex items-center gap-2">
          <UserButton />
        </div>
      </div>
    </div>
  );
}
