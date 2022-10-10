import Link from "next/link";

import { BsArrowLeft } from "react-icons/bs";

export const ContinueShopping = () => {
  return (
    <Link href="/">
      <div className="cursor-pointer flex items-center justify-center gap-7 border border-zinc-400 px-8">
        <BsArrowLeft size={30} />
        <a className="uppercase font-bold" title="Back to Shopping">
          Back to Shop
        </a>
      </div>
    </Link>
  );
};

import React from "react";
