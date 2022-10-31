import Link from "next/link";
import { useState } from "react";

import { CgMenu } from "react-icons/cg";
import { FaApple } from "react-icons/fa";
import {
  AiOutlineClose,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className="relative   flex justify-between lg:flex-col items-center h-full z-10 lg:py-4 ">
        <Link href="/">
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

        <div className="hidden lg:flex justify-center items-center flex-col gap-4">
          <Link href="facebook.com">
            <a title="Facebook">
              <AiFillFacebook size={25} />
            </a>
          </Link>

          <Link href="instagram.com">
            <a title="Instagram">
              <AiFillInstagram size={25} />
            </a>
          </Link>

          <Link href="twitter.com">
            <a title="Twitter">
              <AiFillTwitterSquare size={25} />
            </a>
          </Link>
        </div>
      </section>

      <nav
        className={`absolute z-[1] left-0 -top-full   transition-transform transform-gpu ${
          menuOpen ? "translate-y-full z-[1]" : ""
        }  h-screen w-screen  lg:w-screen-1/3 text-white bg-neutral-900 z-[1]`}
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
