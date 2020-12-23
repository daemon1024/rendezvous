import { ApolloProvider } from "@apollo/client";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import { useApollo } from "../lib/apolloClient";
import GlobalStyle from "../styles/globalStyles";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  const theme = {
    bg: "#121212",
    fg: "#eeeeee",
    tint: "#22bad9",
  };

  return (
    <>
      <Head>
        <title>Rendezvous</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
}
