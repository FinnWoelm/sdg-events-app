import { Component } from 'react'
import getComponentDisplayName from 'helpers/getComponentDisplayName'
import DefaultLayout from 'layouts/DefaultLayout'

// This function takes a page
export default function withLayout(Page) {
  // ...and returns another component...
  class WithLayout extends Component {
    static getInitialProps(ctx) {
      return Page.getInitialProps ? Page.getInitialProps(ctx) : {};
    }

    render() {
      const props = this.props;

      // ... and renders the page inside the layout!
      // Notice that we pass through any props
      return (
        <DefaultLayout>
          <Page {...props} />
        </DefaultLayout>
      );
    }
  }
  WithLayout.displayName = `WithLayout(${getComponentDisplayName(Page)})`
  return WithLayout
}
