import Script from "next/script";
import { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>

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
