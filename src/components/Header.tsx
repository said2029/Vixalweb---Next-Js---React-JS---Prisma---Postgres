import { House, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import Bounded from "./Bounded";

export default function Header() {
  return (
    <header className="bg-gray-950  w-screen z-30">
      <div className="bg-primary flex items-center justify-center gap-2 py-3 font-sans text-xs">
        <p className="text-white">لطلب عبر  الواتساب : </p>
        <Link href="#"> اضغط هنا</Link>
      </div>
      <Bounded className="flex items-center justify-between py-4">
        <Link href={"/"} className="text-white text-xl font-biocats uppercase">VIXALWEB</Link>
        <ul className="flex items-center justify-between gap-3 text-white">
          <li>
            <Link href={"/"}>
              <User />
            </Link>
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
