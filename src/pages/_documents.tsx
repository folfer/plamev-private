import Head from "next/Head";
import Script from "next/script";
import { Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Script
            type="text/javascript"
            async
            src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/e9fc4309-eb82-483d-8522-05ba3d0d6fd0-loader.js"
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
