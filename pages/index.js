import EventList, { ALL_EVENTS_QUERY } from "../components/EventList";
import { initializeApollo, addApolloState } from "../lib/apolloClient";

const IndexPage = () => <EventList />;

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_EVENTS_QUERY,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
}

export default IndexPage;
