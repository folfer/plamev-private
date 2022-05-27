import { useEffect } from "react";
import { Header } from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/global.scss";
import { AuthProvider } from "../hooks/AuthContext";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
    });
  }, []);

  return (
    <>
      <Header />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
