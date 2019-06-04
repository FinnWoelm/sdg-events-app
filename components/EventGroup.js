import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

import Event from 'models/Event'
import EventCard from 'components/EventCard'

const Title = styled(Typography)`
  display: flex;

  &:after,
  &:before {
    content: '';
    flex: 1;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 48.5%, rgba(0, 0, 0, 0.1) 48.5%, rgba(0, 0, 0, 0.1) 51.5%, rgba(255, 255, 255, 0) 51.5%);
  }
  &:after {
    margin-left: 10px;
  }
  &:before {
    width: 10px;
    max-width: 10px;
    margin-right: 10px;
  }
`

const EventGroup = ({ title, events }) => (
  <Box py={2}>
    <Box py={2}>
      <Title variant='h4' gutterBottom>
        {title}
      </Title>
    </Box>
    <Grid container spacing={2}>
      {events.map(event => (
        <EventCard key={event.id} event={new Event(event)} />
      ))}
    </Grid>
  </Box>
)

export default EventGroup
