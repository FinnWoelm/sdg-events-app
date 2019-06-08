import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import CallMadeIcon from '@material-ui/icons/CallMade'
import TodayIcon from '@material-ui/icons/Today'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import MapIcon from '@material-ui/icons/Map'
import NotesIcon from '@material-ui/icons/Notes'
import styled from 'styled-components'

import theme from 'config/theme'
import withLayout from 'hocs/withLayout'
import Database from 'models/Database'
import Event from 'models/Event'
import EventDate from 'components/EventDate'

const List = styled(Typography).attrs({
  variant: 'body1',
  component: 'ol'
})`
  && {
    margin: 20px 0;
  }
`

const ListItem = styled.li`
  margin-bottom: 10px;
`

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

const Section = styled(Box).attrs({marginTop: 3})`

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

  ${theme.breakpoints.up('sm')} {
    padding: 32px;
  }

  ${theme.breakpoints.up('md')} {
    padding: 48px;
  }

  ${theme.breakpoints.up('lg')} {
    padding: 64px;
  }
`

const ActionButton = styled(Button)`
  && {
    margin-right: 16px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  svg {
    margin-right: 8px;
  }
`

const ActionArea = styled(Box)`
  border-top: 1px solid rgba(0,0,0,.1);
  border-bottom: 1px solid rgba(0,0,0,.1);
`

const AboutPage = ({ event }) => (
  <Container>
    <PaperWithPadding>
      <Title variant='h2' gutterBottom>
        &Uuml;ber uns
      </Title>
      <Section>
        <Typography variant='body1' gutterBottom>
          SDG Events ist eine Sammlung von Veranstaltungen zum
          Thema Agenda 2030 in Deutschland.

          Daf&uuml;r werden t&auml;glich die Webseiten verschiedener
          Organisationen abgefragt und nach neuen Veranstaltungen
          durchsucht.

          <br/><br/>


          SDG Events ist ein
          {' '}
          <a  href="https://github.com/FinnWoelm/sdg-events-app"
              target="_blank">
            open source Projekt
          </a>
          {' '}
          von
          {' '}
          <a  href="https://twitter.com/FinnWoelm"
              target="_blank">
            Finn Woelm
          </a>
          .
        </Typography>
      </Section>
      <Section>
        <Title variant='h4' gutterBottom>
          Warum?
        </Title>
        <Typography variant='body1' gutterBottom>
          SDG Events ist w&auml;hrend meiner Suche nach spannenden Veranstaltungen rund
  um die Agenda 2030 entstanden.

          <br/><br/>

          Als ich angefangen haben, mich
          mit dem Thema Sustainable Development Goals zu
          besch&auml;ftigen, ist es mir schwer gefallen, einen
          &Uuml;berblick &uuml;ber die vielen guten Aktivit&auml;ten in diesem
          Bereich zu bekommen. Oft habe ich von Events erst dann erfahren, als
          sie schon vorbei waren (oder die Anmeldefrist abgelaufen).

          <br/><br/>

          Seit Mai 2019 durchsuche ich t&auml;glich die Webseiten von Organisationen
          nach Veranstaltungen zu Agenda 2030. Mit der Zeit ist
          daraus SDG Events enstanden. Vielleicht hilfts ja dem einen oder anderen :)
        </Typography>
      </Section>
      <Section>
        <Title variant='h4' gutterBottom>
          Wie funktioniert es?
        </Title>
        <Typography variant='body1' gutterBottom>
          Das Projekt setzt sich aus drei halb-automatischen Komponenten zusammen:
        </Typography>
        <List>
          <ListItem>
            Ein Python Programm ist verantwortlich f&uuml;r das Sammeln von
            Veranstaltungen von den verschiedenen Organisationen. Dazu ruft das
            Programm einfach die jeweiligen Webseiten der Organisationen auf und
            durchsucht ihre Listen von Veranstaltungen. Die Organisationen und
            Links, die abgefragt werden, lassen sich
            {' '}
            <a  href="https://docs.google.com/spreadsheets/d/1NxjKdgT6du_XhVYHF3sP1JhXm8R1JRZ_EPYFhf_-tBA/edit#gid=1925444285"
                target="_blank">
              hier einsehen
            </a>
            .
          </ListItem>

          <ListItem>
            Die Ergebnisse des Python Programms werden in
            {' '}
            <a  href="https://docs.google.com/spreadsheets/d/1NxjKdgT6du_XhVYHF3sP1JhXm8R1JRZ_EPYFhf_-tBA/edit#gid=0"
                target="_blank">
              ein Google Sheet
            </a>
            {' '}
            eingetragen. Dabei &uuml;berpr&uuml;fe ich noch mal die Richtigkeit
            der Daten und die Relevanz der Veranstaltung. Es werden nur Events
            aufgenommen, die die Agenda 2030 oder die Sustainable Development
            Goals explizit erw&auml;hnen.
          </ListItem>

          <ListItem>
            Die SDG Events Webseite l&auml;dt die Veranstaltungen dann aus der
            Google Sheet Datenbank und stellt diese &uuml;bersichtlich da.
          </ListItem>
        </List>

        <Typography variant='body1' gutterBottom>
          M&ouml;chtest du noch mehr Details? Check das
          {' '}
          <a  href="https://docs.google.com/document/d/1RAQXXrtoLWp_9gghApqOoDQ-luUorC1vytb6VQBCbDE/edit"
              target="_blank">
            SDG Events Whitepaper
          </a>
          .
        </Typography>
      </Section>
      <Section>
        <Title variant='h4' gutterBottom>
          Feedback & Mitmachen
        </Title>
        <Typography variant='body1' gutterBottom>
          Hast du eine Idee, um die Seite besser zu machen?
          Hat die Webseite dir geholfen?
          Gefällt dir etwas nicht? Ist mir ein Fehler unterlaufen?
          Kennst du noch ein Event oder eine Organization? Willst du mithelfen?

          <br/><br/>
          Ich freue mich, von dir zu h&ouml;ren! Du kannst mich
          {' '}
          <a  href="https://twitter.com/FinnWoelm"
              target="_blank">
            auf Twitter unter @FinnWoelm
          </a>
          {' '}
          erreichen.
        </Typography>
      </Section>
    </PaperWithPadding>
  </Container>
)

export default withLayout(AboutPage)
