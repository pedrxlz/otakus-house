import { useRouter } from "next/router.js";

import Head from "next/head";

import { Header } from "../components/Header/index.jsx";
import { Footer } from "../components/Footer/index.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.css";
import Script from "next/script.js";

import { useEffect, useState } from "react";
import { parseCookies } from "nookies";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { route } = router;

  const [isLogged, setIsLogged] = useState(false);

  const cookies = parseCookies();

  useEffect(() => {
    if (!!cookies.user) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [cookies.user]);

  const isLogin =
    route?.includes("login") ||
    route?.includes("find") ||
    route?.includes("change") ||
    route?.includes("reset");

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {!isLogin && <Header isLogged={isLogged} />}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"
      />
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme={"light"}
      />

      {!isLogin && <Footer />}
    </>
  );
}
