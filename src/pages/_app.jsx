import "./../styles/index.css";
import { Layout } from "../layouts";
import { createContext } from "react";
import { useCart } from "../hooks";

export const AppContext = createContext();

function MyApp({ Component, pageProps }) {
  const cart = useCart();

  return (
    <Layout>
      <AppContext.Provider value={{ cart }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </Layout>
  );
}

export default MyApp;
