import { ApolloProvider } from "@apollo/client";
import Head from "next/head";
import Header from "../components/Header";
import { useApollo } from "../lib/apolloClient";
import GlobalStyle from "../styles/globalStyles";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <>
      <Head>
        <title>Rendezvous</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
