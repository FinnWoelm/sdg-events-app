import Link from 'next/link'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

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

const CardMeta = styled(Typography)`
  && {
    font-weight: 300;
    margin: 4px 0;
  }

  span:not(:first-child):before {
    content: "•";
    padding: 0 4px;
  }
`

const EventCard = ({ event }) => (
  <Grid item xs={12} sm={6} md={4}>
    <CardWithFullHeight elevation={2}>
      <Link as={`/events/${event.id}`} href={`/event?id=${event.id}`} passHref>
        <CardActionAreaWithFullHeight>
          <CardContent style={{display: 'flex', padding: 0}}>
            <DateBox align='center' padding={2.5}>
              <Typography variant='body1' color='primary'>
                {event.shortMonth}
              </Typography>
              <Typography variant='h5' color='primary'>
                {event.day}
              </Typography>
            </DateBox>
            <Box padding={2.5} paddingLeft={0}>
              <CardTitle variant='body1'>
                {event.title}
              </CardTitle>
              <CardMeta variant='body2' color='textSecondary'>
                {event.city ? (
                  <span>
                    {event.city}
                  </span>
                ) : null}
                {event.time ? (
                  <span>
                    {event.time}
                  </span>
                ) : null}
              </CardMeta>
              <Typography variant='body2'>
                {event.summary}
              </Typography>
            </Box>
          </CardContent>
        </CardActionAreaWithFullHeight>
      </Link>
    </CardWithFullHeight>
  </Grid>
)

export default EventCard
