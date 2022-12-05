import App from "next/app";
import Head from "next/head";
import "../styles/page.scss";
import { createContext } from "react";
import { fetchAPI } from "../lib/api";

export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={'https://for-strapi-test.online' + global.attributes.favicon.data.attributes.url}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

        {/* Временная мета для показа */}
        <title>{global.attributes.siteName}</title>
        <meta property="og:title" content={global.attributes.defaultSeo.metaTitle} />
        <meta property="og:site_name" content={global.attributes.siteName} />
        <meta property="og:url" content={'https://for-next-test.ru'} />
        <meta property="og:description" content={global.attributes.defaultSeo.metaDescription} />
        <meta property="og:image" content={'https://for-strapi-test.online' + global.attributes.defaultSeo.shareImage.data.attributes.url} />
        {/*  */}
      </Head>
      <GlobalContext.Provider value={global.attributes}>
          <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
};

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);

  const globalRes = await fetchAPI("/global", {
    populate: "deep,5",
  });

  return { ...appProps, pageProps: { global: globalRes.data } };
};

export default MyApp;