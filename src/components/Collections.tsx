import React from "react";
import Image, { StaticImageData } from "next/image";
import { Arimo } from "next/font/google";

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

interface Collections {
  title: string;
  subtitle: string;
  images?: StaticImageData[];
}

const Collections = ({ title, subtitle, images }: Collections) => {
  return (
    <section className="px-4">
      <h2 className={`text-2xl font-bold ${arimo.className} italic`}>
        {title}
      </h2>
      <p className={`text-lg ${arimo.className}`}>{subtitle}</p>
      <div className="grid grid-cols-4 grid-rows-3 gap-4">
        {images?.map((img, index) => (
          <div key={index} className="relative h-64 w-full">
            <Image
              src={img}
              alt={`${title} image ${index + 1}`}
              fill
              priority
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
