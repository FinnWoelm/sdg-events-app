import { Fragment } from 'react'
import Box from '@material-ui/core/Box'
import { createGlobalStyle } from "styled-components"

import Navigation from 'components/Navigation'
import Footer from 'components/Footer'

const StickyFooterStyles = createGlobalStyle`
  html, body, #__next {
    height: 100%;
  }

  #__next {
    display: flex;
    flex-direction: column;
  }
`

const DefaultLayout = ({ children }) => (
  <Fragment>
    <Navigation />
    <Box paddingTop={10} paddingBottom={8} style={{flexGrow: 1}}>
      {children}
    </Box>
    <Footer />
    <StickyFooterStyles />
  </Fragment>
)

export default DefaultLayout
