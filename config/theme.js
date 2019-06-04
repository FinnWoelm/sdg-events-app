import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

// Create a theme instance.
let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1a5aba',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f8f9fa',
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.65)"
    }
  },
})

theme = responsiveFontSizes(theme)

export default theme
