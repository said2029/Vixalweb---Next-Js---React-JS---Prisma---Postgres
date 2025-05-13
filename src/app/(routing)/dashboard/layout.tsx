import React, { ReactNode } from "react";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function layout({ children }: { children: ReactNode }) {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        {/* header */}
        <Header />
        <main className="p-10">

        {children}
        </main>
      </div>
    </div>
  );
}
