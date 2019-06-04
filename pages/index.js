import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

import theme from 'config/theme'
import Database from 'models/Database'
import Event from 'models/Event'
import EventGroup from 'components/EventGroup'

const Hero = styled(Box)`
  margin-top: 10vh;
`

const SearchBar = styled(Box)`
  // position: sticky;
  // top: 0;
  margin-bottom: 10vh;
`

const Image = styled.img`
  max-height: 100px;
  margin: 16px 0;

  ${theme.breakpoints.up('md')} {
    min-height: 150px;
  }

  ${theme.breakpoints.up('lg')} {
    min-height: 200px;
  }
`

const Index = ({ groupedEvents }) => (
  <Container>
    <Hero textAlign='center' paddingTop={2} paddingBottom={2}>
      <Image src='/static/sdg-logo.png' alt='SDG color wheel'/>
      <Typography variant='h2' gutterBottom>
        Events zu SDGs & Agenda 2030
      </Typography>
      <Typography variant='h4' color='textSecondary' style={{fontWeight: '300'}}>
        Veranstaltungen von &uuml;ber 60 Organisationen in Deutschland
        <br/>
        &mdash; t&auml;glich aktualisiert
      </Typography>
    </Hero>
    <SearchBar>
      {
        // Search
      }
    </SearchBar>
    {Object.keys(groupedEvents).map(group => (
      <EventGroup key={group} title={group} events={groupedEvents[group]} />
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
