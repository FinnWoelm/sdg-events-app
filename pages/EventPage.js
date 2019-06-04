import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

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

const IconBox = styled(Box)`
  max-width: 50px;
  min-width: 50px;
  width: 50px;
`

const EventPage = ({ event }) => (
  <Container>
    <Box my={2}>
      <Paper>
        <Box padding={4}>
          <Title variant='h2' gutterBottom>
            {event.title}
          </Title>
          <FlexBox>
            <IconBox>
              D
            </IconBox>
            <Box>
              <Typography variant='body1'>
                <EventDate event={event} />
              </Typography>
            </Box>
          </FlexBox>
          <FlexBox>
            <IconBox>
              O
            </IconBox>
            <Box>
              <Typography variant='body1'>
                {event.location.split('\n').map(line => (
                  [line, <br/>]
                ))}
              </Typography>
            </Box>
          </FlexBox>
          <FlexBox>
            <IconBox>
              B
            </IconBox>
            <Box>
              <Typography variant='body1'>
                {event.description.split('\n').map(line => (
                  [line, <br/>]
                ))}
              </Typography>
            </Box>
          </FlexBox>
        </Box>
      </Paper>
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
