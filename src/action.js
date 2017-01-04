// @flow
import axios from 'axios'
import _ from 'lodash'

const BASE_SHEET_ID = '1WsADSxHkAkWU5P8qYXm5BnaeVxZdo5XBhEcGJGiuDFY'

export type Action =
  { type: 'fetching.set', fetching: boolean } |
  { type: 'tables.add', table: Array<Array<string>> }

export default {
  handleClick: () => async (dispatch: (action: Action) => void) => {
    dispatch({ type: 'fetching.set', fetching: true })

    try {
      const ids = await getIds()
      const promises = ids.map(async id => {
        const table = await getTable(id)
        dispatch({ type: 'tables.add', table })
      })

      await Promise.all(promises)
    } finally {
      dispatch({ type: 'fetching.set', fetching: false })
    }
  },
}

// ================================
// 部品

function getIds () {
  return getSheet(BASE_SHEET_ID)
    .then(cells => cells.map(cell => cell.$t))
}

function getTable (id) {
  return getSheet(id)
    .then(cells => (
      _(cells)
        .groupBy(cell => cell.row - 1)
        .map(row => _(row).map(cell => cell.$t).value())
        .value()
    ))
}

function getSheet (sheetId) {
  return axios
    .get(`https://spreadsheets.google.com/feeds/cells/${sheetId}/od6/public/values?alt=json`)
    .then((response) => response.data.feed.entry.map(e => e.gs$cell))
}
