import { Fragment } from 'react'

const Date = ({ moment }) => (
  <Fragment>
    <span className='weekday'>
      {moment.format('dddd')}
    </span>
    ,
    {' '}
    <span className='day'>
      {moment.format('D')}.
    </span>
    {' '}
    <span className='month'>
      {moment.format('MMMM')}
    </span>
    {' '}
    <span className='year'>
      {moment.format('YYYY')}
    </span>
  </Fragment>
)

const Time = ({ display, moment, prefix }) => {
  if(!display || !moment)
    return null

  return (
    <Fragment>
      {prefix}
      <span className='time'>
        {moment.format('H:mm')} Uhr
      </span>
    </Fragment>
  )
}


const SingleDayDate = ({ event: { startMoment, endMoment, hasStartTime, hasEndTime } }) => (
  <Fragment>
    <span class='line'>
      <Date moment={startMoment} />
    </span>
    <span class='line'>
      <Time display={hasStartTime} moment={startMoment} prefix={<br/>} />
      <Time display={hasEndTime} moment={endMoment} prefix={' — '} />
    </span>
  </Fragment>
)

const MultiDayDate = ({ event: { startMoment, endMoment, hasStartTime, hasEndTime } }) => (
  <Fragment>
    <span class='line'>
      <Date moment={startMoment} />
      <Time display={hasStartTime} moment={startMoment} prefix=', ' />
      {' '}
      &mdash;<br/>
    </span>
    <span class='line'>
      <Date moment={endMoment} />
      <Time display={hasEndTime} moment={endMoment} prefix=', ' />
    </span>
  </Fragment>
)

const EventDate = ({ event }) => {
  if(event.isMultiDay)
    return <MultiDayDate event={event} />
  else
    return <SingleDayDate event={event} />
}

export default EventDate
