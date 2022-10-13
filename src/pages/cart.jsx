import Head from "next/head";

import { CartControl, ContinueShopping } from "../components/cart";
import { RelatedProducts } from "../components/catalog";
// import { useCart } from "../hooks";

const Cart = () => {
  // const cart = useCart(2);

  // if (cart === null) {
  //   return <></>;
  // }

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
        <section className="mt-16">
          <RelatedProducts productCategory={category} productId={id} />
        </section>
      </main>
    </>
  );
};

export default Cart;
