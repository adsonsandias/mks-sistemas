import type { NextPage } from "next";
import Head from "next/head";
import CartModal from "../components/CartModal";
import { Header } from "../components/Header";
import ListOfProduct from "../components/ListOfProduct";

import "react-toastify/dist/ReactToastify.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MKS Sistemas</title>
        <meta name="description" content="MKS Sistemas App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <ListOfProduct />
      </main>

      <CartModal />

      <footer>
        <span>MKS sistemas © Todos os direitos reservados</span>
      </footer>
    </div>
  );
};

export default Home;
