import moment from 'moment'
import 'moment/locale/de'
import buildUrl from 'build-url'

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

  get hasEndTime() {
    return Boolean(this.endTime)
  }

  get hasStartTime() {
    return Boolean(this.startTime)
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
    const startTime = this.startTime || '0:00'

    return moment(
      `${this.startDate} ${startTime}`,
      "MMMM D, YYYY H:mm",
      'en',
      true
    ).locale('de')
  }

  get endMoment() {
    if(!this.endDate)
      return null

    const endTime = this.endTime || '0:00'

    return moment(
      `${this.endDate} ${endTime}`,
      "MMMM D, YYYY H:mm",
      'en',
      true
    ).locale('de')
  }

  get isMultiDay() {
    return this.duration > 1
  }

  // return a url for adding the event to Google calendar:
  // https://github.com/InteractionDesignFoundation/add-event-to-calendar-docs/blob/master/services/google.md
  googleCalendarUrl() {
    let dates

    const startDate = this.startMoment.format('YYYYMMDD')
    const startTime = this.startMoment.format('HHmmSS')
    let endDate     = this.endMoment.format('YYYYMMDD')
    let endTime     = this.endMoment.format('HHmmSS')

    // if this is a full day event, end date must be +1
    if(!this.hasStartTime && !this.hasEndTime) {
      endDate = this.endMoment.add(1, 'day').format('YYYYMMDD')
      dates = `${startDate}/${endDate}`
    }
    // if no end date exists, set endDate to startDate
    else {
      endTime = this.hasEndTime ? endTime : startTime
      dates = `${startDate}T${startTime}/${endDate}T${endTime}`
    }

    return buildUrl('https://calendar.google.com/', {
      path: 'calendar/render',
      queryParams: {
        action: 'TEMPLATE',
        text: this.title,
        dates: dates,
        ctz: 'Europe/Berlin',
        details: this.description,
        location: this.location
      }
    })
  }

  // return a link to the event location on Google Maps:
  // https://developers.google.com/maps/documentation/urls/guide#search-action
  googleMapsUrl() {
    return buildUrl('https://www.google.com/', {
      path: 'maps/search/',
      queryParams: {
        api: 1,
        query: this.location.replace(/\n/g, ", ")
      }
    })
  }
}

export default Event
