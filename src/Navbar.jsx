import { useState } from "react";

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
    <>
      <div className="flex justify-between px-4 bg-[#E9ECFF] items-center">
        <div className="flex items-center">
          <img src="/vector.svg" />
          <div className="font-instrument-sans font-bold text-xl pl-2">
            PrimalTraining
          </div>
        </div>
        <div
          className={`${icon}-icon w-18 h-18`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </div>
      {navbarItems.map((item) => (
        <ul
          className={`uppercase bg-[#E9ECFF] pb-2 text-center z-100 ${navbarUlMarginTop} transition-all duration-500 ease-in-out`}
        >
          <li key={item}>
            <a href={item.href}>{item.name}</a>
          </li>
        </ul>
      ))}
    </>
  );
};

export default Navbar;
