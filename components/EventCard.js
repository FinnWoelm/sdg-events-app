import Link from 'next/link'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

import EventCardMetaSection from 'components/EventCardMetaSection'

const CardWithFullHeight = styled(Card)`
  height: 100%;
`

const CardActionAreaWithFullHeight = styled(CardActionArea)`
  height: 100%;
`

const DateBox = styled(Box)`
  min-width: 70px;
  width: 70px;
`

const CardTitle = styled(Typography)`
  && {
    font-weight: 500;
  }
`

const CardContentWithoutOverflow = styled(CardContent)`
  && {
    display: flex;
    padding: 0;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
`

const EventCard = ({ event }) => (
  <Grid item xs={12} sm={6} md={4}>
    <CardWithFullHeight elevation={2}>
      <Link as={`/events/${event.id}`} href={`/EventPage?id=${event.id}`} passHref>
        <CardActionAreaWithFullHeight>
          <CardContentWithoutOverflow>
            <DateBox align='center' padding={2.5}>
              <Typography variant='body1' color='primary'>
                {event.shortMonth}
              </Typography>
              <Typography variant='h5' color='primary'>
                {event.day}
              </Typography>
            </DateBox>
            <Box padding={2.5} paddingLeft={0} style={{overflow: 'hidden'}}>
              <CardTitle variant='body1'>
                {event.title}
              </CardTitle>
              <EventCardMetaSection event={event} />
              <Typography variant='body2'>
                {event.summary}
              </Typography>
            </Box>
          </CardContentWithoutOverflow>
        </CardActionAreaWithFullHeight>
      </Link>
    </CardWithFullHeight>
  </Grid>
)

export default EventCard
