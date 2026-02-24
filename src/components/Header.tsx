import { ShoppingBag } from "@deemlol/next-icons";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="px-2 py-4">
        <div className="bg-amber-100">
          <nav className="flex justify-between">
            <ul className="flex gap-4 font-stretch-semi-condensed font-semibold">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <div>LOGO</div>
            <ShoppingBag size={24} color="#121212" />
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
