import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const icon = isMenuOpen ? "multiply" : "plus";
  const navbarItems = [
    { href: "/", name: "home" },
    { href: "/about", name: "about" },
    { href: "/reserve", name: "reserve your spot" },
  ];
  const navbarUlMarginTop = isMenuOpen ? "mt-0" : "-mt-100";
  return (
    <nav>
      <div className="font-instrument-sans flex justify-between px-4 bg-[#E9ECFF] items-center md:py-5 fixed w-full top-0">
        <a href="/" className="flex items-center">
          <img src="/vector.svg" />
          <div className="font-bold text-xl pl-2">PrimalTraining</div>
        </a>
        <ul
          className={`max-md:hidden uppercase bg-[#E9ECFF] pb-2 text-center flex gap-4 pr-4`}
        >
          {navbarItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={
                  item.href === "/reserve"
                    ? "bg-[#808CFD] p-3 rounded-xl [word-spacing:5px]"
                    : "hover:bg-gray-300 p-2 rounded-lg"
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={`md:hidden ${icon}-icon w-18 h-18`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </div>
      <ul
        className={`uppercase bg-[#E9ECFF] text-center pb-3 z-100 ${navbarUlMarginTop} transition-all duration-500 ease-in-out md:hidden`}
      >
        {navbarItems.map((item) => (
          <li key={item.href} className="p-4">
            <Link
              to={item.href}
              className={
                item.href === "/reserve"
                  ? "bg-[#808CFD] p-3 rounded-xl [word-spacing:5px]"
                  : "hover:bg-gray-300 p-3 rounded-lg"
              }
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
