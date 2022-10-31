import "./../styles/index.css";
import { Layout } from "../layouts";
import { createContext } from "react";
import { useCart } from "../hooks";

export const AppContext = createContext();

function MyApp({ Component, pageProps }) {
  const { cart, setCart, alterProduct } = useCart();

  return (
    <Layout>
      <AppContext.Provider value={{ cart, setCart, alterProduct }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </Layout>
  );
}

export default MyApp;
