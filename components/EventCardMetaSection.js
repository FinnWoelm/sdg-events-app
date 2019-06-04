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

const EventCardMetaSection = ({ event }) => (
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
)

export default EventCardMetaSection
