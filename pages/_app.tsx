import "../styles/globals.scss";
import type { AppProps } from "next/app";
import MyNavbar from "../components/navbar/navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MyNavbar />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
