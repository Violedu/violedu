import Document, { Html, Head, Main, NextScript } from 'next/document';

const gtag = `https://www.googletagmanager.com/gtag/js?id=G-S7PW6X8LQ1`;

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* 1. First set disable flag */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Block GA by default until consent
                window['ga-disable-G-S7PW6X8LQ1'] = true;
              `,
            }}
          />
          
          {/* 2. Then load GA script */}
          <script async src={gtag} />
          
          {/* 3. Initialize dataLayer and check cookies */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                
                // Check cookies AFTER GA script loads
                if (document.cookie.includes('cookieAccepted=true')) {
                  window['ga-disable-G-S7PW6X8LQ1'] = false;
                  gtag('config', 'G-S7PW6X8LQ1');
                }
              `,
            }}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
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