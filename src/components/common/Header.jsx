import Link from "next/link";
import { useState } from "react";

import { CgMenu } from "react-icons/cg";
import { FaApple } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className="relative flex justify-between items-center h-full z-10">
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
      </section>

      <nav
        className={`absolute left-0 ${
          menuOpen ? "top-0" : "-top-full"
        }  h-screen w-screen text-white bg-neutral-900 `}
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
