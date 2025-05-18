import { cn } from "@/lib/utils";
import React from "react";
import ChartWeek from "./_components/ChartWeek";

const CardsInfo = [
  {
    title: "إجمالي المبيعات",
    count: 16,
    img: "bg-[url(/images/dash_1.png)]",
  },
  {
    title: "عدد الطلبات خلال آخر أسبوع",
    count: 14,
    img: "bg-[url(/images/dash_2.png)]",
  },
  {
    title: "عدد المنتجات",
    count: 12,
    img: "bg-[url(/images/dash_3.png)]",
  },
];

export default function page() {
  return (
    <div>
      <div>
        <h2 className="font-mono text-2xl">لوحة التحكم</h2>
        <div className="mt-5 grid gap-10 lg:grid-cols-3">
          {CardsInfo.map((item, index) => (
            <div
              key={index}
              className={cn(
                "bg-lef rounded-sm border border-zinc-900 bg-cover bg-no-repeat p-3 pb-8",
                item.img,
              )}
            >
              <h4 className="font-mono text-2xl">{item.title}</h4>
              <p className="mt-4 font-mono text-4xl text-zinc-900">
                {item.count}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 grid h-[350px] grid-cols-3 gap-10">
        <div className="h-full overflow-hidden rounded-sm border pb-3">
          <div className="bg-primary px-4 py-3 text-white">
            <p className="font-mono text-xl">المنتجات الأكثر مبيعا</p>
          </div>

          <div className="mt-5 px-4">
            {/* Card */}
            <div className="flex gap-3">
              <div className="size-20 shrink-0 bg-amber-700"></div>
              <div>
                <h4 className="font-mono text-xl">
                  المنتجات الأكثر مبيعا المنتجات الأكثر مبيعا
                </h4>
                <p className="text-primary font-mono text-xl">34$</p>
              </div>
            </div>
          </div>
        </div>
        {/* chart */}
        <div className="col-span-2 h-full rounded-md border p-4">
          <h4 className="font-mono text-2xl">الطلبات خلال الأسبوع</h4>
          <ChartWeek />
        </div>
      </div>
    </div>
  );
}
