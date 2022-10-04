import { css } from "@emotion/css";

import { ImSad } from "react-icons/im";

export const ProductGrid = ({ products = [] }) => {
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
      grid-template-columns: repeat(4, 1fr);
      column-gap: 32px;
    }
  `;

  return (
    <ul className={gridCss}>
      {products.map((product, index) => {
        const { name, price } = product;

        return (
          <li key={index}>
            <article className="w-full">
              <header>
                <div className="w-full h-72 bg-gray-200"></div>
              </header>

              <section className="mt-8 text-center text-sm">
                <h1 className="uppercase text-zinc-400 md-2">{name}</h1>

                <div className="text-zinc-900 font-light">{price}</div>
              </section>
            </article>
          </li>
        );
      })}
    </ul>
  );
};
