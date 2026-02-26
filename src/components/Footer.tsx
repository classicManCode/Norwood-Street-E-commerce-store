const Footer = () => {
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
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-amber-400 py-2 px-2"
            />
            <button>Join</button>
          </div>
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
