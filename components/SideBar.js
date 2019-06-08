import Link from 'next/link'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import styled from 'styled-components'

const DrawerMinWidth = styled(Drawer)`
  > .MuiPaper-root {
    min-width: 300px;
  }
`

const SideBar = ({ open, onClose }) => (
  <DrawerMinWidth open={open} onClose={onClose}>
    <List>
      <Link as='/' href='/HomePage' passHref>
        <ListItem button component='a'>
          <ListItemText primary="Alle Events" />
        </ListItem>
      </Link>
      <Link as='/organisationen' href='/OrganizationsPage' passHref>
        <ListItem button component='a'>
          <ListItemText primary="Organisationen" />
        </ListItem>
      </Link>
      <Link as='/ueber-uns' href='/AboutPage' passHref>
        <ListItem button component='a'>
          <ListItemText primary="Über uns" />
        </ListItem>
      </Link>
    </List>
  </DrawerMinWidth>
)

export default SideBar
