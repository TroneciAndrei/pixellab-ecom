import { BsTrashFill } from "react-icons/bs";
import { useContext } from "react";
import { baseUrl } from "../..";
import { AppContext } from "../../pages/_app";

export const RemoveFromCart = ({ product }) => {
  const { cart, alterProduct } = useContext(AppContext);

  if (cart === null) {
    return;
  }

  const { id: cartId, products } = cart;

  const { id: productId } = product;

  let quantity = 0;
  let isInCart = false;
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId === productId) {
      quantity = products[i].quantity;
      isInCart = true;
    }
  }

  const newCart = {};

  const onClick = () => {
    fetch(`${baseUrl}/carts/${cartId}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then((_) => {
        alterProduct(productId, -quantity);
      });
  };

  return (
    <div>
      {isInCart ? (
        <button title="remove from cart" type="button" onClick={onClick}>
          <BsTrashFill size={32} className="mx-5"></BsTrashFill>
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};
