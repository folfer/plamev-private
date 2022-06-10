import { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
import '../styles/global.scss';
import { AuthProvider } from '../hooks/AuthContext';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
    });
  }, []);

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
