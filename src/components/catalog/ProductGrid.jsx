import { css } from "@emotion/css";
import Image from "next/image";
import Link from "next/link";

import { ImSad } from "react-icons/im";
import { ProductTile } from "./ProductTile";

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
        return (
          <li key={id}>
            <ProductTile product={product} />
          </li>
        );
      })}
    </ul>
  );
};
