import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";

export const ALL_EVENTS_QUERY = gql`
  query {
    eventMany {
      _id
      name
      description
      event_start_time
    }
  }
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* width: 80%; */
`;

const EventBox = styled.div`
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const EventImagePlaceholder = styled.div`
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 5px;
  height: 10vh;
  width: 15vw;
`;

const EventName = styled.h3`
  font-weight: bold;
`;

export default function EventList() {
  const { loading, error, data } = useQuery(ALL_EVENTS_QUERY);

  if (error) return <ErrorMessage message="Error loading Events." />;
  if (loading) return <div>Loading</div>;

  const { eventMany } = data;

  return (
    <>
      <h1>Events</h1>
      <List>
        {eventMany.map((event) => {
          let name = event.name;
          let date = new Date(event.event_start_time);
          let description = event.description;
          return (
            <EventBox key={event._id}>
              <EventImagePlaceholder />
              <div>
                <p>{date.toDateString()}</p>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </EventBox>
          );
        })}
      </List>
    </>
  );
}
