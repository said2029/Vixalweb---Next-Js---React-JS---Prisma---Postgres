import { House, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import Bounded from "./Bounded";
import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

export default async function Header() {
  const user = await currentUser();
  return (
    <header className="z-30 w-screen bg-gray-950">
      <div className="bg-primary flex items-center justify-center gap-2 py-3 font-sans text-xs">
        <p className="text-white">لطلب عبر  الواتساب : </p>
        <Link href="#"> اضغط هنا</Link>
      </div>
      <Bounded className="flex items-center justify-between py-4">
        <Link href={"/"} className="font-biocats text-xl text-white uppercase">
          VIXALWEB
        </Link>
        <ul className="flex items-center justify-between gap-3 text-white">
          <li>
            {user ? (
              <UserButton />
            ) : (
              <Link href={"/sign-in"}>
                <User />
              </Link>
            )}
          </li>
          <li>
            <Link href={"/"}>
              <ShoppingCart />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <House />
            </Link>
          </li>
        </ul>
      </Bounded>
    </header>
  );
}
