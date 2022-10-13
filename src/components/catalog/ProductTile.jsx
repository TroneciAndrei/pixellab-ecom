import Image from "next/image";
import Link from "next/link";

export const ProductTile = ({ product }) => {
  const { title, price, image, id } = product;

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return (
    <article className="w-full">
      <header>
        <div className="w-full text-center relative">
          <Link href={`/products/${id}`}>
            <a title={title} className="cursor-pointer">
              {/* <img
              alt={`Image for product ${title}`}
              src={image}
              className="h-full inline"
            ></img> */}
              <span className="relative">
                <Image
                  src={image}
                  width={500}
                  height={300}
                  objectFit="contain"
                  alt={`Image for product ${title}`}
                />
              </span>
            </a>
          </Link>
        </div>
      </header>

      <section className="mt-8 text-center text-sm relative z-[-1]">
        <h1 className="uppercase text-zinc-400 md-2">{title}</h1>

        <div className="text-zinc-900 font-light">{formattedPrice}</div>
      </section>
    </article>
  );
};
