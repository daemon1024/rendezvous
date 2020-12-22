import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";

export const ALL_EVENTS_QUERY = gql`
  query {
    eventMany {
      _id
      name
      description
      status
      event_start_time
    }
  }
`;

const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const EventBox = styled.div`
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  width: 192px;
  padding: 5px;
`;

const EventImagePlaceholder = styled.div`
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 5px;
  height: 10vh;
  width: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

export default function EventList() {
  const { loading, error, data } = useQuery(ALL_EVENTS_QUERY);

  if (error) return <ErrorMessage message="Error loading Events." />;
  if (loading) return <div>Loading</div>;

  const { eventMany } = data;

  return (
    <>
      <EventContainer>
        <h1>Upcoming Events</h1>
        <List>
          {eventMany.map((event) => {
            if (event.status == "scheduled") {
              let name = event.name;
              let date = new Date(event.event_start_time);
              let description = event.description;
              return (
                <EventBox key={event._id}>
                  <EventImagePlaceholder>
                    <p>( ͡ ° ͜ʖ ͡ ° )</p>
                  </EventImagePlaceholder>
                  <p>{date.toDateString()}</p>
                  <h4>{name}</h4>
                  <p>{description}</p>
                </EventBox>
              );
            }
          })}
        </List>
      </EventContainer>
      <EventContainer>
        <h1>Past Events</h1>
        <List>
          {eventMany.map((event) => {
            if (event.status == "finished") {
              let name = event.name;
              let date = new Date(event.event_start_time);
              let description = event.description;
              return (
                <EventBox key={event._id}>
                  <EventImagePlaceholder>
                    <p>(•ㅅ•)</p>
                  </EventImagePlaceholder>
                  <p>{date.toDateString()}</p>
                  <h4>{name}</h4>
                  <p>{description}</p>
                </EventBox>
              );
            }
          })}
        </List>
      </EventContainer>
    </>
  );
}
