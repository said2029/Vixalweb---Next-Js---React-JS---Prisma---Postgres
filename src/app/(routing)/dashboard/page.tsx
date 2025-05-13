import React from "react";

const CardsInfo = [
  {
    title: "إجمالي المبيعات",
    count: 16,
    img: "/images/dash_1.png",
  },
  {
    title: "عدد الطلبات خلال آخر أسبوع",
    count: 14,
    img: "/images/dash_2.png",
  },
  {
    title: "عدد المنتجات",
    count: 12,
    img: "/images/dash_3.png",
  },
];

export default function page() {
  return (
    <div>
      <div>
        <h2 className="font-mono text-2xl">لوحة التحكم</h2>
        <div className="grid lg:grid-cols-3 gap-10 mt-5">
          {CardsInfo.map((item, index) => (
            <div key={index} className="rounded-3xl border border-zinc-900">
              <h4>{item.title}</h4>
              <p>{item.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
