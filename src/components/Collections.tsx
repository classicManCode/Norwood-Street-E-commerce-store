import React from "react";
import Image from "next/image";
import heroImg1 from "@/public/gym-equipment.jpg";
import { Arimo } from "next/font/google";

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const Collections = () => {
  return (
    <section className="px-4">
      <h2 className={`text-2xl font-bold ${arimo.className} italic`}>
        Featured Collections
      </h2>
      <p className={`text-lg ${arimo.className}`}>Shop All Collections</p>
      <div className="grid grid-cols-4 grid-rows-3 gap-4">
        <div className="relative h-64 w-full col-start-1">
          <Image
            src={heroImg1}
            alt="Hero"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative h-64 w-full col-start-2">
          <Image
            src={heroImg1}
            alt="Hero"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative h-64 w-full col-start-3">
          <Image
            src={heroImg1}
            alt="Hero"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative h-64 w-full col-start-4">
          <Image
            src={heroImg1}
            alt="Hero"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Collections;
