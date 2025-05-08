import { cn } from "@/lib/utils";
import React, { ElementType, ReactNode } from "react";

type BoundedProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export default function Bounded({
  children,
  as: Com = "section",
  className,
}: BoundedProps) {
  return (
    <Com className="px-4">
      <div className={cn("mx-auto w-full max-w-6xl", className)}>
        {children}
      </div>
    </Com>
  );
}
