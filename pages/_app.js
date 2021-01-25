import "../styles/globals.css";

import { createWrapper } from "next-redux-wrapper";
import store from "../redux/store";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} store={store} />;
};

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
