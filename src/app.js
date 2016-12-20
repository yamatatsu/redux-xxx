import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

import Site from 'containers/Site.jsx'

render(<Site />, document.getElementById('dom-root'))

if (module.hot) {
  module.hot.accept()
}
