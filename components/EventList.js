import { gql, useQuery } from '@apollo/client'
import ErrorMessage from './ErrorMessage'

export const ALL_EVENTS_QUERY = gql`
  query{
    eventMany{
      _id
      name
      description
      event_start_time
    }
  }
`

export default function EventList() {
  const { loading, error, data } = useQuery(
    ALL_EVENTS_QUERY
  )

  if (error) return <ErrorMessage message="Error loading Events." />
  if (loading) return <div>Loading</div>
  const { eventMany } = data
  console.log(eventMany)

  return (
    <section>
      <ul>
        {eventMany.map((event, index) => (
          <li key={event._id}>
            <div>
              <span>{index + 1}. </span>
              <a>{event.name}</a>
              <p>{event.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <style jsx>{`
        section {
          padding-bottom: 20px;
        }
        li {
          display: block;
          margin-bottom: 10px;
        }
        div {
          align-items: center;
          display: flex;
        }
        a {
          font-size: 14px;
          margin-right: 10px;
          text-decoration: none;
          padding-bottom: 0;
          border: 0;
        }
        span {
          font-size: 14px;
          margin-right: 5px;
        }
        ul {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </section>
  )
}
