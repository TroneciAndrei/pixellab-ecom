import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { useProduct } from "../../hooks";
import ProductReviews from "../../pages/products/ProductReviews";
import { AppContext } from "../../pages/_app";

export const CartLineItem = ({ product }) => {
  const { quantity, productId } = product;
  const { product: cartItem } = useProduct(productId);
  const isLoaded = cartItem !== null;
  const { alterProduct } = useContext(AppContext);

  if (!isLoaded) {
    return <></>;
  }

  const { image, price, id, title, rating } = cartItem;

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price * quantity);

  if (quantity === 1) {
    console.log("1");
  }

  return (
    <tr className="flex justify-between  items-center w-full border p-2">
      <td>
        <button
          type="button"
          title="Remove from cart"
          className="p-2 bg-zinc-300 text-white border hover:bg-zinc-600  text-sm"
          onClick={() => {
            const confirmDelete = window.confirm(
              `Are you sure you wish to delete product: ${title} from cart?`
            );

            if (confirmDelete) alterProduct(id, -quantity);
            else return;
          }}
        >
          X
        </button>
      </td>
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
      <td>
        <div className="border">
          <button
            type="button"
            title="Decrease"
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
