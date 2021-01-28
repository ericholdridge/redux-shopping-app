import Head from "next/head";
import {useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import Cart from "../components/Cart/Cart";

const cartPage = () => {
  return (
    <>
      <Head>
        <title>Redux Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Cart />
    </>
  );
};

export default cartPage;
