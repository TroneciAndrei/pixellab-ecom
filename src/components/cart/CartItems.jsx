import { useContext } from "react";
import { AppContext } from "../../pages/_app";
import { CartLineItem } from "./CartLineItem";

export const CartItems = () => {
  const { cart } = useContext(AppContext);

  if (cart === null) {
    return <></>;
  }

  const { products } = cart;
  if (products === undefined) {
    return;
  }

  if (products.length <= 0) {
    return <></>;
  }
  return (
    <table className="flex justify-center items-center flex-col w-full">
      <thead className="w-full">
        <tr className="flex justify-around items-center border-b w-full mb-5">
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody className="w-full flex flex-col flex-wrap lg:flex-nowrap gap-5 items-center justify-center">
        {products.map((product) => {
          return (
            <CartLineItem
              product={product}
              key={product.productId}
            ></CartLineItem>
          );
        })}
      </tbody>
    </table>
  );
};
