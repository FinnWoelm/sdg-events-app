import Link from 'next/link'

const EventLink = props => (
  <li>
    <Link as={`/events/${props.id}`} href={`/event?id=${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = () => (
  <div>
    <h1>SDG Events</h1>
    <ul>
      <EventLink id="123" title="Event SDGs" />
      <EventLink id="456" title="Ocean Event" />
      <EventLink id="789" title="SDSN Event" />
    </ul>
  </div>
)

export default Index
