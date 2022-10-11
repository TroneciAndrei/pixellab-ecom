import Image from "next/image";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../..";

export const RelatedProducts = ({ image, price, title, acategory }) => {
  console.log(image, price, title);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`${baseUrl}/products/categories?limit=4`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setProduct(result);
      });
  }, []);

  if (product === null) {
    return <></>;
  }

  return (
    <div>
      <h1>Related Products</h1>
      {product
        .filter((category) => category !== acategory)
        .map((_) => (
          <div className="flex justify-center items-center gap-12 flex-col text-center">
            <Image src={image} width={200} height={200} objectFit="contain" />

            <div>
              <h1>{title}</h1>
              <span>{price}</span>
            </div>
          </div>
        ))}
    </div>
  );
};
