import Head from "next/head";

import {
  CartControl,
  CartItems,
  CartTotals,
  CartVoucher,
  ContinueShopping,
} from "../components/cart";
import { useCart } from "../hooks";

const Cart = () => {
  const cart = useCart(2);

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>

      <main className="container px-4 lg:px-0 mx-auto">
        <header className="flex justify-between text-zinc-400">
          <ContinueShopping />
          <CartControl cart={cart}></CartControl>
        </header>
        <section className="mt-16 grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <CartItems />
            <CartVoucher />
          </div>

          <aside className="col-span-4">
            <CartTotals />
          </aside>
        </section>
      </main>
    </>
  );
};

export default Cart;
