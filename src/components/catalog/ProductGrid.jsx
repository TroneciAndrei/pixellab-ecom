import { css } from "@emotion/css";
import Link from "next/link";

import { ImSad } from "react-icons/im";

export const ProductGrid = ({ products = [], perRow = 4 }) => {
  if (products.length <= 0) {
    return (
      <div className="flex justify-center items-center flex-col gap-3 mb-4">
        <ImSad size={100} />
        <p className="text-2xl font-bold">There is no products found</p>
      </div>
    );
  }

  const gridCss = css`
    display: grid;
    row-gap: 32px;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(${perRow}, 1fr);
      column-gap: 32px;
    }
  `;

  return (
    <ul className={gridCss}>
      {products.map((product, id) => {
        const { title, price, image } = product;

        const formattedPrice = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price);

        return (
          <li key={id}>
            <article className="w-full">
              <header>
                <div className="w-full h-72 text-center ">
                  <Link href={`/products/${id}`}>
                    <a title={title}>
                      <img
                        alt={`Image for product ${title}`}
                        src={image}
                        className="h-full inline"
                      ></img>
                    </a>
                  </Link>
                </div>
              </header>

              <section className="mt-8 text-center text-sm">
                <h1 className="uppercase text-zinc-400 md-2">{title}</h1>

                <div className="text-zinc-900 font-light">{formattedPrice}</div>
              </section>
            </article>
          </li>
        );
      })}
    </ul>
  );
};
