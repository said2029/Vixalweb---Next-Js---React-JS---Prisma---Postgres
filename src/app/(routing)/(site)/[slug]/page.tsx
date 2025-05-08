import Bounded from "@/components/Bounded";
import Gift from "@/components/Gift";
import CompletedIcon from "@/components/Icons/completedIcons";
import WhatsappIcon from "@/components/Icons/WhatsappIcon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div>
      <Bounded className="mt-10">
        <div>
          <p>
            {"الصفحة الرئسية > التصميم > Smartfolio – قالب بورتفوليو للمصممين"}
          </p>
          <h3 className="mt-2 font-mono text-3xl">
            {"MockupX – ملفات موك أب لعرض التصاميم"}
          </h3>

          <div className="mt-5 flex gap-10">
            {/* right side */}
            <div className="grow">
              <div className="h-[500px] overflow-hidden rounded-2xl bg-red-400">
                <Image
                  className="h-full w-full object-cover"
                  width={300}
                  height={250}
                  alt=""
                  src="/images/test.png"
                />
              </div>

              <div className="mt-10 rounded-2xl bg-white p-10 shadow-2xl">
                <p>
                  {
                    "Iconify Pack هي حزمة أيقونات تقنية مصممة خصيصًا للمصممين والمطورين، تضم أكثر من 500 أيقونة عالية الجودة بصيغ SVG وPNG. سواء كنت تعمل على موقع ويب، تطبيق، أو لوحة تحكم – ستجد ما يناسب مشروعك من رموز حديثة وعصرية. 🔹 المميزات: أكثر من 500 أيقونة متناسقة تصميم نظيف وحديث متوفرة بصيغ SVG و PNG جاهزة للاستخدام في Figma وWebflow وReact تحديثات مستمرة ومجانية"
                  }
                </p>
              </div>
            </div>
            {/* left side */}
            <div className="h-fit min-w-[293px] rounded-2xl border bg-white p-5">
              <div className="flex items-center justify-between">
                <p className="font-mono text-sm font-bold">
                  {"احصل عليه الآن!"}
                </p>
                <p className="flex items-center gap-2 font-sans">
                  <span className="text-primary">{"23.99$"}</span>
                  <span className="text-zinc-950/70 line-through">
                    {"23.99$"}
                  </span>
                </p>
              </div>
              <hr className="mt-5" />
              <ul className="mt-5 space-y-3 font-mono text-sm">
                <li className="flex items-center gap-2">
                  <CompletedIcon />
                  <p>{"جودة عالية"}</p>
                </li>
                <li className="flex items-center gap-2">
                  <CompletedIcon />
                  <p>{"تحديث مستقبلي"}</p>
                </li>
                <li className="flex items-center gap-2">
                  <CompletedIcon />
                  <p>{"دعم الجودة"}</p>
                </li>
              </ul>
              <Button className="mt-5 h-10 w-full cursor-pointer bg-teal-600 hover:bg-teal-700">
                <p className="font-mono text-sm">{"استثمر في أدواتك"}</p>
                <WhatsappIcon />
              </Button>
              <p className="mt-5 text-center font-mono text-xs">
                {"💡 أداة مثالية لمشروعك القادم – جرّبها الآن"}
              </p>
            </div>
          </div>
        </div>
      </Bounded>

      <Gift/>
    </div>
  );
}
