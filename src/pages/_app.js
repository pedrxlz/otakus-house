import { useRouter } from "next/router.js";

import Head from "next/head";

import { Header } from "../components/Header/index.jsx";
import { Footer } from "../components/Footer/index.jsx";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.css";
import Script from "next/script.js";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { route } = router;

  const isLogin =
    route?.includes("login") ||
    route?.includes("find") ||
    route?.includes("change");

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {!isLogin && <Header />}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"
      />
      <Component {...pageProps} />
      {!isLogin && <Footer />}
    </>
  );
}
