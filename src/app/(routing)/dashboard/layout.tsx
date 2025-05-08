import React, { ReactNode } from "react";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        {/* header */}
        <Header/>
        {children}
      </div>
    </div>
  );
}
