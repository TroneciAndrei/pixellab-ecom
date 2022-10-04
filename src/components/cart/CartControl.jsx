import Link from "next/link";

import { CgShoppingBag } from "react-icons/cg";

export const CartControl = () => {
  return (
    <ul className="border border-zinc-400 border-l-0">
      <li>
        <Link href="/cart">
          <a
            title="Cart"
            className="w-24 h-24 flex justify-center items-center"
          >
            <CgShoppingBag size={25} />
          </a>
        </Link>
      </li>
    </ul>
  );
};
