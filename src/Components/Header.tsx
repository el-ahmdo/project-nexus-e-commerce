import { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../assets/Icon.png";

const HeaderDark = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="mt-1 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">{/* LOGO */}</div>
          <div className="bg-transparent text-[black] hidden md:flex items-center py-3 px-8 rounded-xl font-normal font-questrial">
            <div className="flex items-baseline space-x-8">
              <Link
                to="/"
                className="hover:text-[#387F1A] text-base font-medium transition-colors duration-200">
                Home{" "}
              </Link>
              <Link
                to="/Products"
                className="hover:text-[#387F1A] text-base font-medium transition-colors duration-200">
                Products{" "}
              </Link>
              <Link
                to="/Products"
                className="hover:text-[#387F1A] text-base font-medium transition-colors duration-200">
                Promos{" "}
              </Link>
            </div>
          </div>
          <div className="flex items-center md:space-x-4">
            <button className="bg-[#387F1A] text-[#fff] px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer hidden md:flex items-center justify-center gap-1">
              Cart <img src={icon} alt="cart icon" className="w-4 h-3" />
            </button>
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="relative h-10 w-10 text-gray-700 focus:outline-none rounded-lg p-2 transition-all duration-200 z-50"
                aria-label="Toggle Menu">
                <div className="w-6 h-6">
                  <span
                    className={`absolute block w-6 h-0.5 bg-black rounded-full transform transition-all duration-300 ease-in-out top-[6px] left-0 ${
                      isMobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""
                    }`}
                  />
                  <span
                    className={`absolute block w-6 h-0.5 bg-black rounded-full transition-opacity duration-300 ease-in-out top-[11px] left-0 ${
                      isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`absolute block w-6 h-0.5 bg-black rounded-full transform transition-all duration-300 ease-in-out top-[16px] left-0 ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden absolute top-full left-4 right-4 bg-white rounded-xl shadow-lg py-4 px-6 space-y-4 transition-all duration-300 ease-in-out transform origin-top z-40 ${
            isMobileMenuOpen
              ? "opacity-100 scale-y-100 visible"
              : "opacity-0 scale-y-95 invisible"
          }`}>
          <Link
            to="/"
            className="block text-gray-700 hover:text-[#387F1A] text-base font-medium"
            onClick={() => setIsMobileMenuOpen(false)}>
            Home{" "}
          </Link>
          <Link
            to="/Products"
            className="block text-gray-700 hover:text-[#387F1A] text-base font-medium"
            onClick={() => setIsMobileMenuOpen(false)}>
            Products{" "}
          </Link>
          <Link
            to="/promo"
            className="block text-gray-700 hover:text-[#387F1A] text-base font-medium"
            onClick={() => setIsMobileMenuOpen(false)}>
            Promos{" "}
          </Link>
          <Link
            to="/Contact-us"
            className="block hover:bg-[#25610c] text-gray-700 py-2 text-base font-medium"
            onClick={() => setIsMobileMenuOpen(false)}>
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HeaderDark;
