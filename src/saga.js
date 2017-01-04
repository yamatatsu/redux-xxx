import { put, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import _ from 'lodash'

const BASE_SHEET_ID = '1WsADSxHkAkWU5P8qYXm5BnaeVxZdo5XBhEcGJGiuDFY'

export type SagaAction =
  { type: 'saga.handleClick' }

function* handleClick () {
  yield put({ type: 'fetching.set', fetching: true })

  const ids = yield call(getIds)
  const tables = yield ids.map(id => call(getTable, id))
  yield tables.map(table => put({ type: 'tables.add', table }))

  yield put({ type: 'fetching.set', fetching: false })
}

export default function* rootSaga () {
  yield takeEvery('saga.handleClick', handleClick)
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
