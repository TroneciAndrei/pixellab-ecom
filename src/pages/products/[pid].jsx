import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { baseUrl } from "../..";
import { CartControl, ContinueShopping } from "../../components/cart";
import ProductReviews from "./ProductReviews";

import { BiLoaderCircle } from "react-icons/bi";
// import { useCart } from "../../hooks";

const ProductPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [product, setProduct] = useState(null);
  useEffect(() => {
    if (pid === undefined) {
      return;
    }

    fetch(`${baseUrl}/products/${pid}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setProduct(result);
      });
  }, [pid]);

  // const cart = useCart(2);

  // if (cart === null) {
  //   return <></>;
  // }

  if (product === null) {
    return (
      <div className="flex h-screen w-screen justify-center items-center">
        <BiLoaderCircle size={48} className="animate-spin" />
      </div>
    );
  }

  const { id, title, description, price, image, rating, category } = product;

  const formattedPrice = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  }).format(price);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <header className="container px-4 mx-auto lg:px-0 flex justify-between">
          <ContinueShopping />
          <CartControl />
        </header>

        <section className="mt-16 container px-4 mx-auto lg:px-0 grid gap-8 grid-cols-12">
          <div className="col-start-1 col-span-5">
            <img
              src={image}
              alt={`Image of ${title}`}
              className="block w-full"
            />
          </div>

          <header className="col-start-7 col-span-6 pt-12">
            <h1 className="text-2xl uppercase font-medium">{title}</h1>
            <ProductReviews rate={rating.rate} count={rating.count} />
            <p className="mt-12 ">{description}</p>

            <div className="mt-12">
              <span className="font-bold text-3xl leading-9">
                {formattedPrice}
              </span>
            </div>

            <div className="mt-12">
              <button
                className="bg-black text-white uppercase text-sm font-medium py-3 px-6 hover:bg-amber-800 transition-colors"
                title={`Add${title} to cart`}
                type="button"
                onClick={() => {
                  alert(id);
                }}
              >
                Add to Cart
              </button>
            </div>
          </header>
        </section>
        <section className="border-t"></section>
        <section className="container px-4 mx-auto lg:px-0"></section>
      </main>
    </>
  );
};

export default ProductPage;
