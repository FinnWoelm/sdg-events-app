import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Database from 'models/Database'
import Event from 'models/Event'
import EventCard from 'components/EventCard'

const Index = props => (
  <Container>
    <Box textAlign='center'>
      <Typography variant='h2'>
        Events zu SDGs & Agenda 2030
      </Typography>
      <Typography variant='h4' color='textSecondary' style={{fontWeight: '300'}}>
        Veranstaltungen von &uuml;ber 60 Organisationen in Deutschland
        <br/>
        &mdash; t&auml;glich aktualisiert
      </Typography>
    </Box>
    {Object.keys(props.groupedEvents).map(group => (
      [
        <Typography variant='h6'>
          {group}
        </Typography>,
        <Grid container spacing={2}>
          {props.groupedEvents[group].map(event => (
            <EventCard key={event.id} event={new Event(event)} />
          ))}
        </Grid>
      ]
    ))}
  </Container>
)

Index.getInitialProps = async function() {
  const events = await Database.fetchUpcomingEvents()

  const groupedEvents = Event.groupByMonth(events)

  return {
    groupedEvents: groupedEvents
  }
}

export default Index
