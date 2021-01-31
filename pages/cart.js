import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Cart from "../components/Cart/Cart";

const cartPage = () => {
  return (
    <section className="bg-gray-100 min-h-screen">
      <Head>
        <title>Redux Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Cart />
    </section>
  );
};

export default cartPage;
