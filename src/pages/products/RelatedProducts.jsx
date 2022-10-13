import Image from "next/image";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../..";

const RelatedProducts = ({ productCategory, productId }) => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch(`${baseUrl}/products/category/${productCategory}?limit=4`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setProducts(result);
      });
  }, []);

  if (products === null) {
    return <></>;
  }

  return (
    <div className="text-center">
      <h1>Related Products</h1>
      <div className="flex justify-center items-center gap-5 mt-16">
        {products.map((product) => {
          const { id, title, price, category, image } = product;
          const formattedPrice = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price);

          if (category === productCategory && id !== productId) {
            return (
              <div
                className="flex justify-center items-center text-center"
                key={id}
              >
                <div className="">
                  <Image
                    src={image}
                    width={200}
                    height={200}
                    objectFit="contain"
                  />
                  <h1>{title}</h1>
                  <span>{formattedPrice}</span>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
