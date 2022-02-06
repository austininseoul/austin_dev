import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="sellonsocial" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="modern ugc social media ads agency"
        />
        <meta property="og:url" content="https://sellonsocial.co" />
        <meta property="og:site_name" content="sellonsocial" />
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-0B064WJ050"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0B064WJ050', { page_path: window.location.pathname });
            `,
          }}
        /> */}

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        ></link>
        <link
          href={
            "https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;600;800&display=swap"
          }
          rel="stylesheet"
        ></link>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-DVHX72W0XY`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DVHX72W0XY', {
              page_path: window.location.pathname,
            });
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
