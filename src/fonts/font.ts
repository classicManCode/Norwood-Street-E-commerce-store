import { Archivo, Inter, Unbounded } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["700"],
  style: ["normal"],
});

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

// const spaceGrotesk = Space_Grotesk({
//   subsets: ["latin"],
//   weight: ["500"],
//   style: ["normal"],
// });

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

export { archivo, unbounded, inter };
