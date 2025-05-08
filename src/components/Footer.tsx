import React from "react";
import Bounded from "./Bounded";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0% 100%)",
      }}
      className="mt-10 bg-zinc-950 py-20 pt-32 text-white"
    >
      <Bounded className="flex flex-wrap items-center justify-between gap-10">
        <div className="max-w-xl">
          <div className="space-y-2">
            <h4 className="font-biocats text-2xl">VIXALWEB</h4>
            <p className="font-sans text-xs leading-[1.6]">
              فيكسال ويب متجر رقمي يوفر منتجات جاهزة للمصممين والمطورين، تشمل
              قوالب، برمجيات، وأصول تصميم.
            </p>
          </div>
          <p className="mt-5">
            © 2025 <span className="text-primary">VixalWeb</span> – جميع الحقوق
            محفوظة{" "}
          </p>
        </div>
        <div>
          <ul>
            <li className="font-sans text-[16px]">روابط</li>
            <li className="mt-1 font-mono">
              <Link href={"#"}></Link>من نحن
            </li>
            <li className="mt-1 font-mono">
              <Link href={"#"}>الأسئلة الشائعة</Link>
            </li>
            <li className="mt-1 font-mono">
              <Link href={"#"}>تواصل معنا</Link>
            </li>
            <li className="mt-1 font-mono">
              <Link href={"#"}>الشروط والأحكام</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-sans text-[16px]">التواصل الاجتماعي</li>
            <li className="mt-1 font-mono">
              <Link href={"#"}></Link>فيسبوك
            </li>
            <li className="mt-1 font-mono">
              <Link href={"#"}> انستقرام </Link>
            </li>
            <li className="mt-1 font-mono">
              <Link href={"#"}>يوتيوب </Link>
            </li>
            <li className="mt-1 font-mono">
              <Link href={"#"}>تيك توك </Link>
            </li>
          </ul>
        </div>
      </Bounded>
    </footer>
  );
}
