import sheetrock from 'sheetrock'
import Event from 'models/Event'

const DatabaseURL = "https://docs.google.com/spreadsheets/d/1NxjKdgT6du_XhVYHF3sP1JhXm8R1JRZ_EPYFhf_-tBA/edit#gid=0"

class Database {

  // loads all events
  static async fetchUpcomingEvents() {
    const rawData = await this.asyncSheetrock({
      url: DatabaseURL,
      query: "select A, B, C, D, E, F, G, H, I, J",
      reset: true
    })

    // drop header from rows
    const rawEvents = rawData.rows.slice(1)

    return rawEvents.map(event => (
      new Event({
        id: event.cellsArray[0],
        title: event.cellsArray[1]
      })
    ))
  }

  // executes sheetrock method and returns a promise
  static asyncSheetrock(parameters) {
    return new Promise((resolve, reject) => {
      sheetrock({
        ...parameters,
        callback: (error, options, response) => {
          if (error) {
            reject(error)
          } else {
            resolve(response)
          }
        }
      })
    })
  }
}

export default Database
