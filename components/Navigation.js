import { Component } from 'react'
import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar'
import ButtonBase from '@material-ui/core/ButtonBase'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import styled from 'styled-components'

import SideBar from 'components/SideBar'

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

const ToolbarButton = styled(ButtonBase).attrs({
  focusRipple: true,
  component: 'a',
})`
  && {
    text-align: left;
    padding: 16px;
    display: flex;
    align-self: stretch;
    flex-direction: row;
    align-items: center;
  }
`

const Flex = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { isDrawerOpen: false }
  }

  openDrawer = (event) => {
    this.setState({ isDrawerOpen: true })
  }

  closeDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    this.setState({ isDrawerOpen: false })
  }

  render() {
    const { isDrawerOpen } = this.state

    return (
      <SiteHeader position="fixed" color="default">
        <Toolbar>
          <Hidden mdUp implementation="css">
            <IconButton aria-label="Menu" onClick={this.openDrawer}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Link as='/' href='/HomePage' passHref>
            <ToolbarButton>
              <img src='/static/sdg-logo.png' alt='SDG color wheel'/>
              <Typography variant="h6" color="inherit">
                SDG Events
              </Typography>
            </ToolbarButton>
          </Link>
          <Flex>
            <Hidden implementation="css" smDown>
              <Link as='/ueber-uns' href='/AboutPage' passHref>
                <ToolbarButton>
                  <Typography variant="h6" color="inherit">
                    &Uuml;ber uns
                  </Typography>
                </ToolbarButton>
              </Link>
            </Hidden>
          </Flex>
        </Toolbar>
        <SideBar open={isDrawerOpen} onClose={this.closeDrawer}/>
      </SiteHeader>
    )
  }
}

export default Navigation
