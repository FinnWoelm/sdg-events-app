const MONTHS = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember"
]

class GermanDateTime {
  static getDay(dateString) {
    const date = new Date(dateString)

    return date.getDate()
  }

  static getMonth(dateString) {
    const date = new Date(dateString)

    return MONTHS[date.getMonth()]
  }

  static getShortMonth(dateString) {
    const month = this.getMonth(dateString)

    return month && month.substr(0, 3)
  }

  static getYear(dateString) {
    const date = new Date(dateString)

    return date.getFullYear()
  }
}

export default GermanDateTime
