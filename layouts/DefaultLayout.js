import { Fragment } from 'react'
import Box from '@material-ui/core/Box'

import Navigation from 'components/Navigation'
import Footer from 'components/Footer'

const DefaultLayout = ({ children }) => (
  <Fragment>
    <Navigation />
    <Box paddingTop={10} paddingBottom={8}>
      {children}
    </Box>
    <Footer />
  </Fragment>
)

export default DefaultLayout
