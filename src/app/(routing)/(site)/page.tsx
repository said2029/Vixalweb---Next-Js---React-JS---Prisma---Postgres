import Bounded from "@/components/Bounded";
import ProductCart from "@/components/Carts/ProductCart";
import Gift from "@/components/Gift";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const SLIDER = [
  "دوات تصميم",
  "قوالب",
  "موارد",
  "أدوات تطوير",
  "تصاميم",
  "دوات تصميم",
  "قوالب",
  "موارد",
  "أدوات تطوير",
  "تصاميم",
];

export default function page() {
  return (
    <main>
      {/* hero section */}
      <Bounded className="relative flex h-[100vh] w-screen flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="relative font-sans text-3xl leading-relaxed text-gray-900 md:text-5xl">
            صمّم أسرع، طوّر أذكى – اكتشف منتجات رقمية عالية الجودة
            <p
              style={{
                WebkitTextStroke: "0.7px #0000001f",
              }}
              className="absolute -top-36 right-2 -z-10 hidden font-sans text-9xl text-white lg:block"
            >
              منتجات رقمية
            </p>
          </h2>
          <p className="mt-4 font-sans text-sm opacity-80">
            مجموعة مختارة من القوالب، الأدوات، والموارد لتسريع عملك الإبداعي
            والتقني.
          </p>
        </div>
        <div className="relative mt-10">
          <input
            className="w-[300px] rounded-full border px-4 py-3 placeholder:text-[15px] md:w-[500px]"
            placeholder="ابحث عن قوالب، أدوات، أو تصاميم..."
            type="text"
          />
          <Button className="absolute top-1/2 bottom-1/2 left-2 -translate-y-1/2 cursor-pointer rounded-full">
            البحت
          </Button>
        </div>

        <Slider className="rotate-12" />
        <Slider className="-rotate-12" />

        <div className="hidden md:block">
          <Image
            className="absolute right-0 bottom-40 -z-10"
            width={400}
            height={400}
            alt=""
            src={"/images/elements/element_1.png"}
          />
          <Image
            className="absolute top-40 -left-30 -z-10"
            width={500}
            height={500}
            alt=""
            src={"/images/elements/element_2.png"}
          />
        </div>
      </Bounded>

      {/* الأكثر مبيعاً */}
      <Bounded>
        <h2 className="text-center font-sans text-2xl text-gray-800">
          الأكثر مبيعاً
        </h2>
        {/* products */}
        <div className="mt-7 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-10">
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </div>

        <div className="mt-10 grid place-content-center">
          <Button className="h-10 rounded-full px-5">المزيد من المنتجات</Button>
        </div>
      </Bounded>

      {/* gift */}
      <Gift />
    </main>
  );
}

const Slider = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "bg-primary absolute bottom-20 hidden items-center gap-5 py-5 md:flex",
        className,
      )}
    >
      {SLIDER.map((slider, index) => (
        <React.Fragment key={index + slider}>
          <h3 className="font-sans text-2xl leading-3 text-nowrap text-white/80">
            {slider}
          </h3>
          <svg
            width="32"
            height="31"
            viewBox="0 0 32 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_116_367)">
              <path
                d="M25.7247 14.6082C25.2589 17.0044 23.8604 19.1174 21.8366 20.4824C19.8129 21.8474 17.3298 22.3526 14.9336 21.8868C12.5374 21.4211 10.4244 20.0225 9.05936 17.9988C7.69434 15.975 7.18915 13.492 7.65493 11.0957C8.1207 8.69954 9.51929 6.58651 11.543 5.22149C13.5667 3.85647 16.0498 3.35128 18.446 3.81706C20.8422 4.28283 22.9553 5.68142 24.3203 7.70514C25.6853 9.72887 26.1905 12.212 25.7247 14.6082Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.00243 15.7625L2.63155 21.9417L7.19824 21.6224L7.51942 26.1894L12.1787 20.8291M23.6658 18.8071L26.3308 26.5484L22.2145 24.5412L20.2077 28.6558L17.8957 21.9404M18.0138 8.01814L18.772 10.765C18.7867 10.8339 18.8197 10.8975 18.8676 10.9491C18.9156 11.0008 18.9766 11.0384 19.0442 11.0582L21.7282 12.015C21.8054 12.0405 21.8737 12.0875 21.9251 12.1505C21.9765 12.2134 22.0089 12.2898 22.0184 12.3705C22.0279 12.4512 22.0143 12.533 21.9789 12.6062C21.9436 12.6794 21.8882 12.741 21.8191 12.7838L19.3984 14.3262C19.3565 14.3781 19.328 14.4395 19.3153 14.5049C19.3025 14.5704 19.306 14.638 19.3254 14.7018L19.183 17.5271C19.1845 17.6101 19.1618 17.6917 19.1177 17.762C19.0736 17.8323 19.01 17.8882 18.9346 17.9229C18.8592 17.9576 18.7754 17.9696 18.6933 17.9574C18.6112 17.9453 18.5344 17.9095 18.4724 17.8544L16.2643 16.0743C16.2063 16.0333 16.1402 16.005 16.0704 15.9915C16.0006 15.9779 15.9288 15.9793 15.8596 15.9957L13.1455 16.8189C13.0676 16.8456 12.9836 16.8493 12.9037 16.8294C12.8238 16.8095 12.7513 16.7669 12.695 16.7068C12.6387 16.6467 12.601 16.5716 12.5865 16.4905C12.5719 16.4095 12.581 16.3259 12.6128 16.25L13.6102 13.5909C13.6427 13.5311 13.6597 13.4641 13.6597 13.396C13.6598 13.328 13.6428 13.261 13.6103 13.2011L11.9506 10.8485C11.9064 10.783 11.8813 10.7066 11.878 10.6277C11.8746 10.5488 11.8933 10.4705 11.9318 10.4015C11.9703 10.3325 12.0271 10.2756 12.096 10.237C12.165 10.1984 12.2432 10.1797 12.3221 10.1829L15.1638 10.319C15.2339 10.3261 15.3046 10.314 15.3683 10.2841C15.4321 10.2542 15.4866 10.2076 15.526 10.1492L17.258 7.88637C17.305 7.82172 17.3691 7.77154 17.4432 7.74153C17.5173 7.71152 17.5983 7.70288 17.677 7.71661C17.7557 7.73034 17.829 7.76587 17.8885 7.81917C17.9481 7.87247 17.9915 7.9414 18.0138 8.01814Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_116_367">
                <rect
                  width="26"
                  height="26"
                  fill="white"
                  transform="translate(5.87695 0.378662) rotate(11)"
                />
              </clipPath>
            </defs>
          </svg>
        </React.Fragment>
      ))}
    </div>
  );
};
