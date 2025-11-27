import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const icon = openMenu ? "multiply" : "plus";
  const navbarItems = [
    { href: "/", name: "home" },
    { href: "/about", name: "about" },
    { href: "/reserve", name: "reserve your spot" },
  ];
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
          onClick={() => setOpenMenu((prev) => !prev)}
        />
      </div>
      {openMenu &&
        navbarItems.map((item) => (
          <ul className="uppercase bg-[#E9ECFF] pb-2 text-center z-100 ">
            <li key={item} >
              <a href={item.href}>{item.name}</a>
            </li>
          </ul>
        ))}
    </>
  );
};

export default Navbar;
