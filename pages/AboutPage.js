import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

import theme from 'config/theme'
import withLayout from 'hocs/withLayout'

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

const Section = styled(Box).attrs({marginTop: 3})`
`

const ContentWrapper = styled(Box)`
  margin: 16px 0;

  ${theme.breakpoints.up('sm')} {
    margin: 32px 0;
  }

  ${theme.breakpoints.up('md')} {
    margin: 48px 0;
  }

  ${theme.breakpoints.up('lg')} {
    margin: 64px 0;
  }
`

const AboutPage = ({ event }) => (
  <Container>
    <ContentWrapper>
      <Typography variant='h2' gutterBottom>
        &Uuml;ber uns
      </Typography>
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
        <Typography variant='h4' gutterBottom>
          Warum?
        </Typography>
        <Typography variant='body1' gutterBottom>
          SDG Events ist w&auml;hrend meiner Suche nach spannenden
          Veranstaltungen rund um die Agenda 2030 entstanden.

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
        <Typography variant='h4' gutterBottom>
          Wie funktioniert es?
        </Typography>
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
        <Typography variant='h4' gutterBottom>
          Feedback & Mitmachen
        </Typography>
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
    </ContentWrapper>
  </Container>
)

export default withLayout(AboutPage)
