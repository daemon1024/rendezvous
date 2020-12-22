import { ApolloProvider } from "@apollo/client";
import Header from "../components/Header";
import { useApollo } from "../lib/apolloClient";
import GlobalStyle from "../styles/globalStyles";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
