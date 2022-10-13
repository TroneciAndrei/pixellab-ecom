import Link from "next/link";

import { CgShoppingBag } from "react-icons/cg";

export const CartControl = ({ cart }) => {
  // const { products } = cart;

  // const cartQty = products.reduce((cartQty, product) => {
  //   const { quantity } = product;

  //   cartQty += quantity;

  //   return cartQty;
  // }, 0);

  return (
    <ul className=" border border-zinc-400">
      <li>
        <Link href="/cart">
          <a
            title="Cart"
            className="w-24 h-24 flex justify-center items-center"
          >
            {/* {cartQty} */}
            <CgShoppingBag size={25} />
          </a>
        </Link>
      </li>
    </ul>
  );
};
