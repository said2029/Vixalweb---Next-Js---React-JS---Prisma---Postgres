import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="h-14 w-full border-b flex justify-between items-center px-5">
        <div></div>
      <div className="">
        <div className="flex items-center gap-2">
          <div className="size-10 overflow-hidden rounded-full">
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
      </div>
    </div>
  );
}
