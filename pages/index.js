import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Redux Actions
import { fetchProducts } from "../redux/actions/fetchProducts/fetchProducts";
import { fetchCart } from "../redux/actions/fetchCart/fetchCart";
// Components
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCart());
  }, []);

  return (
    <>
      <Head>
        <title>Redux Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Products />
    </>
  );
};

export default Home;
