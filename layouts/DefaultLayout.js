import { Fragment } from 'react'
import Box from '@material-ui/core/Box'

import Navigation from 'components/Navigation'

const DefaultLayout = ({ children }) => (
  <Fragment>
    <Navigation />
    <Box paddingTop={10} paddingBottom={8}>
      {children}
    </Box>
  </Fragment>
)

export default DefaultLayout
