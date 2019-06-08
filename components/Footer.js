import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

const ExternalLink = styled.a.attrs({
  target: '_blank'
})`
  color: white;
`

const Footer = () => (
  <Box py={5} style={{background: '#2a2a4e', color: 'white'}}>
    <Container>
      <Typography variant='body2'>
        <Grid container>
          <Grid item md={8} lg={6}>
            SDG Events ist eine Sammlung von Veranstaltungen zum
            Thema Agenda 2030 in Deutschland.

            Daf&uuml;r werden t&auml;glich die Webseiten verschiedener
            Organisationen abgefragt und nach neuen Veranstaltungen
            durchsucht.

            <br/><br/>


            SDG Events ist ein
            {' '}
            <ExternalLink href="https://github.com/FinnWoelm/sdg-events-app">
              open source Projekt
            </ExternalLink>
            {' '}
            von
            {' '}
            <ExternalLink href="https://twitter.com/FinnWoelm">
              Finn W&ouml;lm
            </ExternalLink>
            . Feedback? Fehler gefunden?
            {' '}
            <ExternalLink href="https://twitter.com/FinnWoelm">
              Schreib mir auf Twitter.
            </ExternalLink>
          </Grid>
        </Grid>
      </Typography>
    </Container>
  </Box>
)

export default Footer
