import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducer from 'reducer'
import Site from 'Container'

const store = createStore(reducer, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <Site />
  </Provider>,
  document.getElementById('dom-root')
)

if (module.hot) {
  module.hot.accept()
}
