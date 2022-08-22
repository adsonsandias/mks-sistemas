import type { AppProps } from "next/app";
import { ContextApiService } from "../Context/ContextApi";
import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ContextApiService>
        <Component {...pageProps} />
        <GlobalStyle />
      </ContextApiService>
    </>
  );
}

export default MyApp;
