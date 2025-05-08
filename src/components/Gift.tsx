import React from 'react'
import { Button } from './ui/button'
import Bounded from './Bounded'
import Image from 'next/image'

export default function Gift() {
  return (
    <div className="from-primary to-primary/50 mt-10 bg-gradient-to-r">
    <Bounded className="relative py-16">
      <h2 className="font-sans text-5xl leading-[1.6] text-white">
        احصل على هدية رقمية مجانية عند شراء أي منتجين – اختر ما يناسبك!
      </h2>
      <Button className="-z-20 h-12 rounded-full px-4">
        احصل على هديتك
      </Button>

      <p
        style={{
          WebkitTextStroke: "1px #ffffff1e",
        }}
        className="pointer-events-none absolute bottom-0 left-0 font-sans text-9xl text-transparent"
      >
        احصل على هدية
      </p>

      <Image
        className="absolute top-7 left-0"
        width={45}
        height={45}
        alt=""
        src={"/images/elements/element_4.png"}
      />
    </Bounded>
  </div>
  )
}
