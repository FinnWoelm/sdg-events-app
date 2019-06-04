import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TodayIcon from '@material-ui/icons/Today'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import NotesIcon from '@material-ui/icons/Notes'
import styled from 'styled-components'

import theme from 'config/theme'
import Database from 'models/Database'
import Event from 'models/Event'
import EventDate from 'components/EventDate'

const Title = styled(Typography)`
  word-wrap: break-word;
  overflow-wrap: break-word;
`

const FlexBox = styled(Box)`
  display: flex;
  flex-direction: row;
  padding: 20px 0;
`

const Date = styled(FlexBox)`
  .line:first-child {
    font-weight: 500;
  }

  .line:not(:first-child) {
    color: ${theme.palette.text.secondary};
  }
`

const Location = styled(FlexBox)`
  span:first-child {
    font-weight: 500;
  }

  span:not(:first-child) {
    color: ${theme.palette.text.secondary};
  }
`

const IconBox = styled(Box)`
  max-width: 50px;
  min-width: 50px;
  width: 50px;

  svg {
    width: 30px;
    height: auto;
    color: ${theme.palette.primary.main};
  }
`

const PaperWithPadding = styled(Paper)`
  padding: 16px;

  ${theme.breakpoints.up('md')} {
    padding: 32px;
  }

  ${theme.breakpoints.up('lg')} {
    padding: 64px;
  }
`

const ActionArea = styled(Box)`
  border-top: 1px solid rgba(0,0,0,.1);
  border-bottom: 1px solid rgba(0,0,0,.1);
`

const EventPage = ({ event }) => (
  <Container>
    <Box my={2}>
      <PaperWithPadding>
        <Title variant='h2' gutterBottom>
          {event.title}
        </Title>
        <ActionArea py={2} marginTop={5} marginBottom={3}>
          <Button href={event.url} target='_blank' variant="outlined" color="primary">
            Alle Infos
          </Button>
        </ActionArea>
        <Date>
          <IconBox>
            <TodayIcon />
          </IconBox>
          <Box>
            <Typography variant='body1'>
              <EventDate event={event} />
            </Typography>
          </Box>
        </Date>
        <Location>
          <IconBox>
            <LocationOnIcon />
          </IconBox>
          <Box>
            <Typography variant='body1'>
              {event.location.split('\n').map(line => (
                [<span>{line}</span>, <br/>]
              ))}
            </Typography>
          </Box>
        </Location>
        <FlexBox>
          <IconBox>
            <NotesIcon />
          </IconBox>
          <Box>
            <Typography variant='body1'>
              {event.description.split('\n').map(line => (
                [line, <br/>]
              ))}
            </Typography>
          </Box>
        </FlexBox>
      </PaperWithPadding>
    </Box>
  </Container>
)

EventPage.getInitialProps = async function(context) {
  const { id } = context.query

  const event = await Database.findEvent(id)

  return {
    event: event
  }
}

function hydrate(WrappedComponent) {
  return class extends React.Component {
    static getInitialProps(ctx) {
      return WrappedComponent.getInitialProps(ctx)
    }
    render() {
      return <WrappedComponent {...this.props} event={this.props.event && new Event(this.props.event)} />
    }
  }
}

export default hydrate(EventPage)
