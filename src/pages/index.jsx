import Head from "next/head";
import { CartControl } from "../components/cart";
import { GridControls, ProductGrid } from "../components/catalog";
// import { Layout } from "../layouts";

const Home = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <main className="container px-4 lg:px-0 mx-auto">
        <header className="flex justify-end text-zinc-400 ">
          <GridControls></GridControls>

          <CartControl></CartControl>
        </header>

        <section className="mt-16">
          <ProductGrid
            products={Array(12).fill({
              name: "Prod",
              price: "$900",
            })}
          ></ProductGrid>
        </section>
      </main>

      {/* <Layout>
        <main>las asa</main>
      </Layout> */}
    </>
  );
};

export default Home;
