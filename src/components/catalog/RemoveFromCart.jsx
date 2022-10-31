import { useContext, useEffect } from "react";
import { baseUrl } from "../..";
import { AppContext } from "../../pages/_app";

export const RemoveFromCart = ({ products, setCart }) => {
  const { cart } = useContext(AppContext);
  const { id: cartId } = cart;
  const [productId] = products;
  //   console.log(productId);

  const removeItem = () => {
    fetch(`${baseUrl}/products/${productId}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  };

  return (
    <button type="button" title="Remove item" onClick={removeItem}>
      X
    </button>
  );
};
