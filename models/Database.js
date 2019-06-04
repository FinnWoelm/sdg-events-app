import sheetrock from 'sheetrock'
import Event from 'models/Event'

const SPREADSHEET_ID = "1NxjKdgT6du_XhVYHF3sP1JhXm8R1JRZ_EPYFhf_-tBA"
const DATABASE_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}`
const DATABASE_URL_FOR_ALL_EVENTS = `${DATABASE_URL}#gid=1383477531`
const DATABASE_URL_FOR_UPCOMING_EVENTS = `${DATABASE_URL}#gid=0`

const SELECT_ALL_FIELDS = "SELECT A, B, C, D, E, F, G, H, I, J"

class Database {
  // find a specific event
  static async findEvent(id) {
    const rows = await this.dbQuery({
      url: DATABASE_URL_FOR_ALL_EVENTS,
      query: `${SELECT_ALL_FIELDS} WHERE A = '${id}' LIMIT 1`
    })

    return this.initializeEvent(rows[0])
  }

  // loads all upcoming events
  static async fetchUpcomingEvents() {
    const rows = await this.dbQuery({
      url: DATABASE_URL_FOR_UPCOMING_EVENTS,
      query: SELECT_ALL_FIELDS
    })

    return rows.map(row => this.initializeEvent(row))
  }

  // initializes one event
  static initializeEvent(row) {
    return new Event({
      id: row.cellsArray[0],
      title: row.cellsArray[1],
      startDate: row.cellsArray[2],
      startTime: row.cellsArray[3],
      endDate: row.cellsArray[4],
      endTime: row.cellsArray[5],
      location: row.cellsArray[6],
      url: row.cellsArray[7],
      summary: row.cellsArray[8],
      description: row.cellsArray[9],
    })
  }

  // execute sheetrock method and return a promise
  static dbQuery(parameters) {
    return new Promise((resolve, reject) => {
      sheetrock({
        reset: true,
        ...parameters,
        callback: (error, options, response) => {
          if (error) {
            reject(error)
          } else {
            const rows = response.rows

            // remove header
            rows.shift()

            // return rows
            resolve(rows)
          }
        }
      })
    })
  }
}

export default Database
