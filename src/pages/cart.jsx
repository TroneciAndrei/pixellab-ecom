import Head from "next/head";

import { CartControl, ContinueShopping } from "../components/cart";

const Cart = () => {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>

      <main className="container px-4 lg:px-0 mx-auto">
        <header className="flex justify-between text-zinc-400">
          <ContinueShopping />
          <CartControl></CartControl>
        </header>
        <section className="mt-16"></section>
      </main>
    </>
  );
};

export default Cart;
