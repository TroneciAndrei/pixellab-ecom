import Link from "next/link";
import { useContext, useEffect, useState } from "react";

import { CgShoppingBag } from "react-icons/cg";
import { AppContext } from "../../pages/_app";

export const CartControl = () => {
  const { cart } = useContext(AppContext);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    if (cart) {
      const qty = cart.products.reduce((qty, product) => {
        qty += product.quantity;

        return qty;
      }, 0);

      setQty(qty);
    }
  }, [cart]);

  if (cart === null) {
    return <></>;
  }

  // const { products } = cart;

  if (cart === undefined) {
    return;
  }

  // const cartQty = products.reduce((cartQty, product) => {
  //   const { quantity } = product;

  //   cartQty += quantity;

  //   return cartQty;
  // }, 0);

  return (
    <ul className="border border-zinc-400">
      <li>
        <Link href="/cart">
          <a
            title="Cart"
            className="w-24 h-24 flex justify-center items-center"
          >
            {qty}
            <CgShoppingBag size={25} />
          </a>
        </Link>
      </li>
    </ul>
  );
};
