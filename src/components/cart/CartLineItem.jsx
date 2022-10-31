import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { useCart, useProduct } from "../../hooks";
import ProductReviews from "../../pages/products/ProductReviews";
import { AppContext } from "../../pages/_app";
import { RemoveFromCart } from "../catalog";

export const CartLineItem = ({ product }) => {
  const { quantity, productId } = product;
  const { product: cartItem } = useProduct(productId);
  const { cart, setCart } = useContext(AppContext);

  const isLoaded = cartItem !== null;

  if (!isLoaded) {
    return <></>;
  }

  const removeItem = (cart, productId) => {
    const { products } = cart;
    const newCart = products.filter(
      (product) => product.productId !== productId
    );

    setCart(newCart);

    // const product = products.find((product) => {
    //   return product.productId === productId;
    // });

    // console.log(product.remove());
  };

  const { image, price, id, title, rating } = cartItem;
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price * quantity);

  return (
    <tr className="flex justify-between  items-center w-full border p-2">
      {/* <RemoveFromCart products={products} setCart={setCart}/> */}
      <button
        type="button"
        title="Remove item"
        onClick={() => removeItem(cart, id)}
      >
        X
      </button>
      <td className="flex gap-5 items-center ">
        <Link href={`/products/${id}`}>
          <a title={title}>
            <Image
              src={image}
              width={100}
              height={100}
              objectFit="contain"
              alt={`Image for product ${title}`}
            ></Image>
          </a>
        </Link>
        <div className="flex flex-col justify-center w-72">
          <Link href={`/products/${id}`}>
            <a className="w-3/4" title={title}>
              {title}
            </a>
          </Link>
          <ProductReviews rate={rating.rate} count={rating.count} />
        </div>
      </td>
      <td className="grow ">${price}</td>
      <td className="grow ">{quantity}</td>
      <td className="grow text-center">{formattedPrice}</td>
    </tr>
  );
};
