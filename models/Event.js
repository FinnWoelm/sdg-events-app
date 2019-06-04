import moment from 'moment'
import 'moment/locale/de'

class Event {
  constructor({ id, title, url, summary, description, location,
                startDate, startTime, endDate, endTime }) {
    this.id = id
    this.title = title
    this.url = url
    this.summary = summary
    this.description = description
    this.location = location
    this.startDate = startDate
    this.startTime = startTime
    this.endDate = endDate
    this.endTime = endTime
  }

  // return an array of events grouped by month:
  static groupByMonth(events) {
    return (
      events.reduce((grouped, event) => {
        (grouped[event.monthWithYear] = grouped[event.monthWithYear] || []).push(event)
        return grouped
      }, {})
    )
  }

  get city() {
    const { location } = this

    if(!location)
      return null

    const isMultiLine = Boolean(location.match("\n"))

    // return the last line, minus zip code
    if(isMultiLine) {
      const [,city] = [].concat(location.split("\n").pop().match(/[0-9]{5} (.*)/))
      return city
    }
    // return the line, removing any potential zip code
    else {
      const [,city] = [].concat(location.match(/(?:[0-9]{5} )?(.*)/))
      return city
    }
  }

  get day() {
    return this.startMoment.format('D')
  }

  get duration() {
    if(!this.endDate)
      return null

    return (this.endMoment.diff(this.startMoment, 'days') + 1)
  }

  get time() {
    if(!this.startTime)
      return null

    return `${this.startTime} Uhr`
  }

  get month() {
    return this.startMoment.format("MMMM")
  }

  get shortMonth() {
    return this.month.substr(0, 3)
  }

  get monthWithYear() {
    return this.startMoment.format("MMMM YYYY")
  }

  get startMoment() {
    return moment(this.startDate, "MMMM D, YYYY", 'en', true).locale('de')
  }

  get endMoment() {
    return moment(this.endDate, "MMMM D, YYYY", 'en', true).locale('de')
  }

  get isMultiDay() {
    return this.duration > 1
  }
}

export default Event
