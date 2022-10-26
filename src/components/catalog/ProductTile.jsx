import Image from "next/image";
import Link from "next/link";
import { AddToCart } from "./AddToCart";

export const ProductTile = ({ product }) => {
  const { title, price, image, id } = product;

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return (
    <article className="w-full">
      <header>
        <div className="w-full text-center">
          <Link href={`/products/${id}`}>
            <a title={title} className="cursor-pointer">
              <div className="relative z-[-1]">
                <Image
                  src={image}
                  width={500}
                  height={300}
                  objectFit="contain"
                  alt={`Image for product ${title}`}
                />
              </div>
            </a>
          </Link>
        </div>
      </header>

      <section className="mt-8 text-center text-sm">
        <h1 className="uppercase text-zinc-400 md-2">{title}</h1>

        <div className="text-zinc-900 font-light">{formattedPrice}</div>

        <AddToCart product={product}></AddToCart>
      </section>
    </article>
  );
};
