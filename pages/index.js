import Link from 'next/link'
import styled from 'styled-components'
import Database from 'models/Database'

const Button = styled.a`
  background: red;
  padding: 5px;
  display: inline-block;
  margin: 10px;
`

const EventLink = props => (
  <li>
    <Link as={`/events/${props.id}`} href={`/event?id=${props.id}`} passHref>
      <Button>{props.title}</Button>
    </Link>
  </li>
)

const Index = props => (
  <div>
    <h1>SDG Events</h1>
    <ul>
      {props.events.map(event => (
        <EventLink key={event.id} id={event.id} title={event.title} />
      ))}
    </ul>
  </div>
)

Index.getInitialProps = async function() {
  const events = await Database.fetchUpcomingEvents()

  return {
    events: events
  }
}

export default Index
