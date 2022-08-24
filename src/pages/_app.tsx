import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ContextApiService } from "../Context/ContextApi";
import store from "../store/store";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ContextApiService>
          <ToastContainer />
          <Component {...pageProps} />
          <GlobalStyle />
        </ContextApiService>
      </Provider>
    </>
  );
}

export default MyApp;
