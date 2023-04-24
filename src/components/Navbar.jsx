import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import insta_logo from "../../public/logos/insta-logo.svg";
import insta_letters from "../../public/logos/Logo Letter.svg";
import insta_line from "../../public/logos/Line 1.svg";
import { NavbarLinks } from "../data/NavbarData";
import { FiSearch } from "react-icons/fi";
import user_pic from "../../public/logos/insta04 3.svg";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 40 ? setIsSticky(true) : setIsSticky(false);
    });
    return () =>
      window.removeEventListener("scroll", () => {
        window.scrollY >= 40 ? setIsSticky(true) : setIsSticky(false);
      });
  }, []);

  return (
    <header className=" w-full sticky top-0 z-999 h-[90px] flex justify-center bg-[#161E29] transition-all" style={{boxShadow: isSticky ? "0 4px 10px #333" : null}}>
      <nav className=" w-full px-28 h-full grid grid-cols-3">
        <div className=" h-full flex items-center">
          <Link to="/">
            <div className=" flex gap-5">
              <img src={insta_logo} alt="" />
              <img src={insta_line} alt="" />
              <img src={insta_letters} alt="" />
            </div>
          </Link>
        </div>
        <form className=" flex items-center justify-center">
          <div className=" flex items-center gap-2 border-2 rounded-[20px] border-white h-[40px] w-[300px] overflow-hidden relative">
            <div className=" text-2xl absolute left-2 text-white">
              <FiSearch />
            </div>
            <input
              type="text"
              className=" bg-transparent w-full h-full outline-0 text-white placeholder:text-white placeholder:text-center placeholder:font-medium placeholder:text-lg text-lg focus:outline-2 focus:outline-red-500 px-10"
              placeholder="Search"
            />
          </div>
        </form>
        <ul className=" flex gap-7 items-center justify-end">
          {NavbarLinks?.map((item) => {
            return (
              <li key={item?.id}>
                <Link to={item?.path}>
                  <img src={item?.icon} alt="" />
                </Link>
              </li>
            );
          })}
          <li>
            <Link to="/profile">
              <img src={user_pic} alt="" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
