import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { useProduct } from "../../hooks";
import ProductReviews from "../../pages/products/ProductReviews";
import { AppContext } from "../../pages/_app";

export const CartLineItem = ({ product, cart, setCart }) => {
  const { quantity, productId } = product;
  const { product: cartItem } = useProduct(productId);
  const { alterProduct, removeProduct } = useContext(AppContext);

  const isLoaded = cartItem !== null;

  if (!isLoaded) {
    return <></>;
  }

  const removeItem = (cart) => {
    // const { products } = cart;

    // const newCart = products
    //   .map((product) => {
    //     return product;
    //   })
    //   .filter((item) => {
    //     return item.productId !== cart.id;
    //   });
    cart.products = cart.products.filter((product) => {
      return product.productId !== productId;
    });
    setCart(cart.products);
  };

  const { image, price, id, title, rating } = cartItem;
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price * quantity);

  return (
    <tr className="flex justify-between  items-center w-full border p-2">
      <td className="flex gap-5 items-center ">
        <div>
          <button
            type="button"
            title="Remove item"
            onClick={() => removeItem(cart)}
          >
            X
          </button>
        </div>
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
      <td>
        <div className="border">
          <button
            type="button"
            title="Decrese"
            className="p-4"
            onClick={() => {
              alterProduct(id, -1);
            }}
          >
            -
          </button>
          {quantity}
          <button
            type="button"
            title="Increase"
            className="p-4"
            onClick={() => {
              alterProduct(id, 1);
            }}
          >
            +
          </button>
        </div>
      </td>
      <td className="grow text-center">{formattedPrice}</td>
    </tr>
  );
};
