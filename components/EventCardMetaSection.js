import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

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

const City = ({ event: { city } }) => {
  if(!city)
    return null;

  return (
    <span>
      {city}
    </span>
  )
}

const DurationOrTime = ({ event: { isMultiDay, duration, time } }) => {
  if(!isMultiDay && !time)
    return null;

  return (
    <span>
      {isMultiDay ? `${duration} Tage` : time}
    </span>
  )
}

const EventCardMetaSection = ({ event }) => (
  <CardMeta variant='body2' color='textSecondary'>
    <City event={event} />
    <DurationOrTime event={event} />
  </CardMeta>
)

export default EventCardMetaSection
