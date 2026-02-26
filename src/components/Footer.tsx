"use client";
import { SyntheticEvent, useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setEmail("");
    console.log(email);
  };

  const currentYear: number = new Date().getFullYear();
  return (
    <footer className="bg-[#b6c0c5]">
      <div className="grid grid-cols-4 w-full h-[300px] p-4 gap-6">
        <div className="flex flex-col items-start justify-center gap-4">
          <h2 className="text-2xl">Norwood Street</h2>
          <p className="text-lg">
            Born on the street, designed for the individual. Norwood Street is
            your destination for premium pieces that define your style.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <h2 className="text-xl">Shop</h2>
          <span>New Arrivals</span>
          <span>Best Sellers</span>
          <span>Top Rated</span>
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <h2 className="text-xl">Company</h2>
          <span>About Us</span>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <h2 className="text-xl">Stay in the loop</h2>
          <span>Join our news letter for exclusive offers and updates</span>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none border-none py-2 px-2 bg-white rounded-lg placeholder:italic placeholder:text-sm"
            />
            <button
              type="submit"
              className="bg-[#465b66] text-white py-2 px-4 rounded-lg cursor-pointer"
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="w-full h-px bg-[#f7f7f7]"></div>
      <div className="w-full h-[50px] flex items-center justify-center">
        <span>&copy; {currentYear} Norwood Street. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
