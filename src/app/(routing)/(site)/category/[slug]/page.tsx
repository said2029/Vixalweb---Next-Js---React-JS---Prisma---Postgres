import Bounded from "@/components/Bounded";
import ProductCart from "@/components/Carts/ProductCart";
import Gift from "@/components/Gift";
import React from "react";

export default function page() {
  return (
    <div className="mt-20">
      <Bounded>
        <h3 className="text-center font-sans text-3xl text-zinc-900">
          {"صفحة الهبوط"}
        </h3>
        <div className="mt-5 grid gap-6 md:grid-cols-3">
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </div>
      </Bounded>

      <Gift />
    </div>
  );
}
