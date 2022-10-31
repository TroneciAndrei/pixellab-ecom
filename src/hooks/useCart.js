import { useEffect, useState } from "react";
import { baseUrl } from "..";

export const useCart = (cartId = 2) => {
  const [cart, setCart] = useState(null);

  const alterCart = (cart, productId) => {
    const { products } = cart;

    const product = products.find((product) => {
      return product.productId === productId;
    });

    console.log(product);

    if (product === undefined) {
      products.push({
        productId,
        quantity: 1,
      });
    } else {
      product.quantity += 1;
    }

    if (product.productId === productId) {
      // products.pop({
      //   productId,
      //   quantity: 1,
      // });
      product.quantity -= 1;
    }

    return cart;
  };

  useEffect(() => {
    fetch(`${baseUrl}/carts/${cartId}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setCart(result);
      });
  }, [setCart, cartId]);

  const addProduct = (productId) => {
    const newCart = alterCart(cart, productId);
    setCart({ ...newCart });
  };

  return { cart, setCart, addProduct };
};
