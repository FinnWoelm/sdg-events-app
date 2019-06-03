import Database from 'models/Database'

const Event = (props) => (
  <div>
    <h1>Event</h1>
    <p>
      Titel: {props.event.title}
    </p>
    <p>
      Ort: {props.event.location}
    </p>
    <p>
      Beschreibung: {props.event.description}
    </p>
    <p>
      URL: {props.event.url}
    </p>
  </div>
)

Event.getInitialProps = async function(context) {
  const { id } = context.query

  const event = await Database.findEvent(id)

  return {
    event: event
  }
}

export default Event
