import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from 'reducer.js'
import Site from 'containers/Site.js'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <Site />
  </Provider>,
  document.getElementById('dom-root')
)

if (module.hot) {
  module.hot.accept()
}
