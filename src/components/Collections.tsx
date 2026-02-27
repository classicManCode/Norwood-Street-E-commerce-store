import React from "react";
import Image, { StaticImageData } from "next/image";
import { unbounded, inter } from "@/src/fonts/font";

interface CollectionItem {
  image: StaticImageData;
  name?: string;
  price?: string | number;
  description?: string;
  link?: string;
}

interface Collections {
  title: string;
  subtitle: string;
  items?: CollectionItem[];
}

const Collections = ({ title, subtitle, items }: Collections) => {
  return (
    <section className="px-4 mb-10">
      <h2 className={`text-3xl ${unbounded.className} italic`}>{title}</h2>
      <p className={`text-lg ${inter.className}`}>{subtitle}</p>
      <div className="grid grid-cols-4 gap-4">
        {items?.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="relative h-84 w-[75%] rounded-2xl overflow-hidden">
              <Image
                src={item.image}
                alt={`${title} image ${index + 1}`}
                fill
                priority
                className="object-cover"
              />
            </div>
            {item.name && <h3>{item.name}</h3>}
            {item.price && <h3>{item.price}</h3>}
            {item.description && <h3>{item.description}</h3>}
            {item.link && <h3>{item.link}</h3>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
