import { useEffect } from "react";
import { Header } from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/global.scss";
import { AuthProvider } from "../hooks/AuthContext";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
    });
  }, []);

  return (
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
