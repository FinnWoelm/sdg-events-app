import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar'
import ButtonBase from '@material-ui/core/ButtonBase'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

const SiteHeader = styled(AppBar)`
  && {
    box-shadow: 0 1px 12px -3px rgba(0,0,0,.1);
    background: white;
  }

  h6 {
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-height: 30px;
    margin: 0 8px;
  }
`

const ToolbarButton = styled(ButtonBase)`
  && {
    text-align: left;
    padding: 16px;
    display: flex;
    align-self: stretch;
    flex-direction: row;
    align-items: center;
  }
`

const Navigation = () => (
  <SiteHeader position="fixed" color="default">
    <Toolbar>
      <Link as='/' href='/HomePage' passHref>
        <ToolbarButton focusRipple component='a'>
          <img src='/static/sdg-logo.png' alt='SDG color wheel'/>
          <Typography variant="h6" color="inherit">
            SDG Events
          </Typography>
        </ToolbarButton>
      </Link>
    </Toolbar>
  </SiteHeader>
)

export default Navigation
