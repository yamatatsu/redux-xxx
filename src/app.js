import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import reducer from 'reducer'
import saga from 'saga'
import Site from 'Container'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(saga)

render(
  <Provider store={store}>
    <Site />
  </Provider>,
  document.getElementById('dom-root')
)

if (module.hot) {
  module.hot.accept()
}
