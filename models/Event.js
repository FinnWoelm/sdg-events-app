import GermanDateTime from 'models/GermanDateTime'

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
    if(!this.location)
      return null

    const [,city] = [].concat(this.location.split("\n").pop().match(/[0-9]{5} (.*)/))

    return city
  }

  get day() {
    return GermanDateTime.getDay(this.startDate)
  }

  get time() {
    if(!this.startTime)
      return null

    return `${this.startTime} Uhr`
  }

  get month() {
    return GermanDateTime.getMonth(this.startDate)
  }

  get shortMonth() {
    return GermanDateTime.getShortMonth(this.startDate)
  }

  get monthWithYear() {
    return `${this.month} ${this.year}`
  }

  get year() {
    return GermanDateTime.getYear(this.startDate)
  }
}

export default Event
