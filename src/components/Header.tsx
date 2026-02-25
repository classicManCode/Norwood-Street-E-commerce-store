import { ShoppingBag } from "@deemlol/next-icons";
import { Search } from "@deemlol/next-icons";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-[#e3f6ff] sticky top-0 z-50">
        <nav className="flex justify-between p-4">
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
          <div className="flex gap-4">
            <Search size={24} color="#121212" />
            <span>Search</span>
            <ShoppingBag size={24} color="#121212" />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
