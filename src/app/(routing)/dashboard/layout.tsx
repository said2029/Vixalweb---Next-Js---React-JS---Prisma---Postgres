import React, { ReactNode } from "react";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/Prisma";
import { Role } from "@prisma/client";

export default async function layout({ children }: { children: ReactNode }) {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  } else {
    // admin users
    const User = await db.user.findMany({
      where: { role: Role.ADMIN },
    });

    // crate new Admin if is are no one
    if (User.length <= 0) {
      await db.user
        .create({
          data: {
            email: user.primaryEmailAddress?.emailAddress ?? "",
            username: user.fullName ?? "",
            role: Role.ADMIN,
          },
        })
        .then(() => {
          redirect("/");
        });
    }

    const isAdmin = User.some(
      (item) => item.email == user.primaryEmailAddress?.emailAddress,
    );

    if (!isAdmin) {
      return redirect("/");
    }
  }
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        {/* header */}
        <Header />
        <main className="p-10">{children}</main>
      </div>
    </div>
  );
}
