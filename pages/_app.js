import "../styles/globals.css";
import { createWrapper } from "next-redux-wrapper";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} store={store}>
      <PersistGate persistor={persistor} />
    </Component>
  );
};

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
