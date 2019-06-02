import { withRouter } from 'next/router'

const Event = (props) => (
  <div>
    <p>
      You are looking at event #{props.router.query.id}
    </p>
  </div>
)

export default withRouter(Event)
