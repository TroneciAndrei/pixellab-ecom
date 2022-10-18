import Head from "next/head";
import { useState } from "react";
import { CartControl } from "../components/cart";
import { GridControls, Paginations, ProductGrid } from "../components/catalog";
import { useCart, useProducts } from "../hooks";

const Products = () => {
  const [perRow, setPerRow] = useState(4);
  const [products] = useProducts();
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const cart = useCart(2);

  if (cart === null) {
    return <></>;
  }

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>

      <main className="container px-4 lg:px-0 mx-auto">
        <header className="flex justify-end text-zinc-400 ">
          <GridControls setPerRow={setPerRow}></GridControls>

          <CartControl cart={cart}></CartControl>
        </header>

        <section className="mt-16 mb-16 relative ">
          <ProductGrid
            products={paginatedProducts}
            perRow={perRow}
          ></ProductGrid>
        </section>

        <section>
          <Paginations
            products={products}
            setPaginatedProducts={setPaginatedProducts}
          />
        </section>
      </main>
    </>
  );
};

export default Products;
