import Link from "next/link";
import { useState } from "react";

import { CgMenu } from "react-icons/cg";
import { FaApple } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className="relative  flex justify-between lg:flex-col items-center h-full z-10 lg:py-4 ">
        <Link href="">
          <a title="Home">
            <FaApple size="32"></FaApple>
          </a>
        </Link>

        <button
          title="Menu"
          type="button"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? (
            <AiOutlineClose size="32"></AiOutlineClose>
          ) : (
            <CgMenu size="32"></CgMenu>
          )}
        </button>

        <div className="hidden lg:block">
          <span className="block w-4 h-4 bg-white rounded-full"></span>
        </div>
      </section>

      <nav
        className={`absolute left-0 -top-full  transition-transform transform-gpu ${
          menuOpen ? "translate-y-full" : ""
        }  h-screen w-screen  lg:w-screen-1/3 text-white bg-neutral-900 `}
      >
        <ul className="flex justify-center items-center flex-col h-full text-3xl gap-6 uppercase font-bold">
          <li>
            <Link href="/">
              <a title="Home">Home</a>
            </Link>
          </li>

          <li>
            <Link href="/about">
              <a title="About">About</a>
            </Link>
          </li>

          <li>
            <Link href="/contact">
              <a title="Contact">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};