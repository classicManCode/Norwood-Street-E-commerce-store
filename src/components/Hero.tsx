import React from "react";
import Image from "next/image";
import heroImg1 from "@/public/gym-equipment.jpg";
import Link from "next/link";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["700"],
  style: ["normal"],
});

const Hero = () => {
  // const heroImages = [
  //   {
  //     id: 1,
  //     image: heroImg1,
  //     title: "Welcome to Norwood Street",
  //     description:
  //       "Your one-stop shop for a variety of products from the best vendors out there",
  //   },
  //   {
  //     id: 2,
  //     image: heroImg2,
  //     title: "Welcome to Norwood Street",
  //     description:
  //       "Your one-stop shop for a variety of products from the best vendors out there",
  //   },
  //   {
  //     id: 3,
  //     image: heroImg3,
  //     title: "Welcome to Norwood Street",
  //     description:
  //       "Your one-stop shop for a variety of products from the best vendors out there",
  //   },
  // ];
  return (
    <>
      <section className="w-full h-screen">
        <div className="z-10 relative w-full h-screen">
          <Image
            src={heroImg1}
            alt="Hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex h-screen items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-4">
              <h1
                className={`text-white text-4xl font-bold ${archivo.className}`}
              >
                Better Shopping Starts Here
              </h1>
              <p className="text-white text-lg w-1/2 text-center">
                A seamless marketplace experience designed for you. Find what
                you love, support who you want.
              </p>
              <Link
                href="/shop"
                className="bg-white text-black px-4 py-2 rounded-md mt-4 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Browse Market
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
