// Import necessary modules
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    // Construct the URL for the Google Analytics script
    const gtag = `https://www.googletagmanager.com/gtag/js?id=G-S7PW6X8LQ1`;

    return (
      <Html>
        <Head>
          {/* Include the Google Analytics script */}
          <script async src={gtag} />

          {/* Inject the Google Analytics tracking code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-S7PW6X8LQ1');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}