// @flow
import { connect } from 'react-redux'
import axios from 'axios'
import _ from 'lodash'

import Main from 'Component.jsx'

import type { Action } from 'action.js'
import type { State } from 'reducer.js'

const BASE_SHEET_ID = '1WsADSxHkAkWU5P8qYXm5BnaeVxZdo5XBhEcGJGiuDFY'

const mapStateToProps = (state: State) => ({
  fetching: state.fetching,
  tables: state.tables,
})

const mapDispatchToProps = (dispatch: (action: Action) => void) => ({
  handleClick: async () => {
    dispatch({ type: 'fetching.set', fetching: true })

    const ids = await getIds()
    const promises = ids.map(async id => {
      const table = await getTable(id)
      dispatch({ type: 'tables.add', table })
    })

    await Promise.all(promises)
    dispatch({ type: 'fetching.set', fetching: false })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)

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
