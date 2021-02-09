import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Cart from "../components/Cart/Cart";

const cartPage = () => {
  return (
    <section className="min-h-screen" style={{background: "#222426"}}>
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
