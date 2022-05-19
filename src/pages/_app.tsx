import { useEffect } from "react";
import { Header } from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
    });
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
