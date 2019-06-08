import Box from '@material-ui/core/Box'
import ButtonBase from '@material-ui/core/ButtonBase'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

import theme from 'config/theme'
import withLayout from 'hocs/withLayout'
import organizations from 'config/organizations'

const ResponsiveImage = styled.img`
  max-width: 100%;
  max-height: 100%;
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

const OrganizationsPage = ({ event }) => (
  <Container>
    <ContentWrapper>
      <Typography variant='h2' gutterBottom>
        Organisationen
      </Typography>
      <Section>
        <Typography variant='body1' gutterBottom>
          SDG Events ist eine Sammlung von Veranstaltungen zum
          Thema Agenda 2030 in Deutschland.

          Daf&uuml;r werden t&auml;glich die Webseiten nachstehender
          Organisationen abgefragt und nach neuen Veranstaltungen
          durchsucht.

          <br/><br/>

          Diese Webseite ist ein unabh&auml;ngiges open source Projekt.
          Es handelt sich bei den aufgef&uuml;hrten Organisationen also
          {' '}
          <strong>
            nicht
          </strong>
          {' '}
          um offizielle Unterst&uuml;tzer.

          <br/><br/>

          Die genauen Webaddressen, die abgefragt werden, lassen sich
          {' '}
          <a  href="https://docs.google.com/spreadsheets/d/1NxjKdgT6du_XhVYHF3sP1JhXm8R1JRZ_EPYFhf_-tBA/edit#gid=1925444285"
              target="_blank">
            hier einsehen
          </a>
          .
        </Typography>
      </Section>
      <Section>
        <Grid container spacing={4}>
          {
            organizations.map(org => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ButtonBase
                  focusRipple
                  component='a'
                  href={org.url}
                  target='_blank'
                  style={{display: 'flex', height: '100%', alignItems: 'flex-start'}}>
                  <Box align='center' padding={3}>
                    <Box style={{height: '200px', minHeight: '200px', maxHeight: '200px', display: 'flex', alignItems: 'center'}}>
                      <ResponsiveImage alt={org.name} src={`/static/org-logos/${org.slug}.png`} />
                    </Box>
                    <Typography variant='caption' component='p'>
                      {org.name}
                    </Typography>
                  </Box>
                </ButtonBase>
              </Grid>
            ))
          }
        </Grid>
      </Section>
    </ContentWrapper>
  </Container>
)

export default withLayout(OrganizationsPage)
