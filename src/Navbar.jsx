import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const icon = isMenuOpen ? "minus" : "plus";
  const navbarItems = [
    { href: "/", name: "home" },
    { href: "/about", name: "about" },
    { href: "/reserve", name: "reserve your spot" },
  ];
  const navbarUlMarginTop = isMenuOpen ? "mt-0" : "-mt-60";
  return (
    <nav className="border-b fixed w-full z-10000">
      <div className="font-instrument-sans flex justify-between px-4 bg-[#E9ECFF] items-center md:py-5">
        <a href="/" className="flex items-center">
          <img src="/vector.svg" />
          <div className="font-bold text-xl pl-2">PrimalTraining</div>
        </a>
        <ul
          className={`max-md:hidden uppercase bg-[#E9ECFF] pb-2 text-center flex md:w-2/5 md:justify-evenly`}
        >
          {navbarItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={
                  item.href === "/reserve"
                    ? "bg-[#808CFD] p-3 rounded-xl [word-spacing:5px] hover:bg-black hover:text-white links-nav"
                    : "hover:text-gray-500 p-2 rounded-lg links-nav"
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={`md:hidden ${icon}-icon w-18 h-18 bg-black`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </div>
      <ul
        className={`uppercase bg-[#E9ECFF] text-center pb-3 ${navbarUlMarginTop} transition-all duration-500 ease-in-out md:hidden absolute w-full`}
      >
        {navbarItems.map((item) => (
          <li
            key={item.href}
            className="p-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link
              to={item.href}
              className={
                item.href === "/reserve"
                  ? "bg-[#808CFD] p-3 rounded-xl [word-spacing:5px] hover:bg-black hover:text-white links-nav"
                  : "hover:text-gray-500 p-2 rounded-lg links-nav"
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
