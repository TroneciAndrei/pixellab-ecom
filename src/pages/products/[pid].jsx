import Head from "next/head";
import { useRouter } from "next/router";
import { CartControl, ContinueShopping } from "../../components/cart";
import ProductReviews from "./ProductReviews";
import { BiLoaderCircle } from "react-icons/bi";
import {
  AddToCart,
  RelatedProducts,
  RemoveFromCart,
} from "../../components/catalog";
import { useProduct } from "../../hooks";
import Image from "next/image";

const ProductPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const { product, status } = useProduct(pid);

  if (product === null && status !== "404") {
    return (
      <div className="flex h-screen w-screen justify-center items-center">
        <BiLoaderCircle size={48} className="animate-spin" />
      </div>
    );
  }

  if (status === "404") {
    return (
      <span className="flex justify-center items-center h-screen text-3xl">
        404 | Product not found
      </span>
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
          <div className="col-start-1 col-span-5 relative z-[-1]">
            <Image
              src={image}
              alt={`Image of ${title}`}
              width={600}
              height={600}
              objectFit="contain"
            ></Image>
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

            <div className="mt-12 flex items-center">
              <AddToCart product={product} />
              <RemoveFromCart product={product}></RemoveFromCart>
            </div>
          </header>
        </section>
        <section className="border-t"></section>
        <section className="container px-4 mx-auto lg:px-0">
          <RelatedProducts productCategory={category} productId={id} />
        </section>
      </main>
    </>
  );
};

export default ProductPage;
