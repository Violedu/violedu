import Document, { Html, Head, Main, NextScript } from 'next/document';
import { parseCookies } from 'nookies'; // Import nookies

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const { req } = ctx;
    let enableGA = false;

    if (req) {
      // Use nookies to parse cookies safely
      const cookies = parseCookies(ctx);
      enableGA = cookies.cookieAccepted === 'true';
    }

    return { ...initialProps, enableGA };
  }

  render() {
    const { enableGA } = this.props;

    const gtagScript = `https://www.googletagmanager.com/gtag/js?id=G-S7PW6X8LQ1`;

    return (
      <Html>
        <Head>
          {enableGA && (
            <>
              <script async src={gtagScript} />
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
            </>
          )}
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
