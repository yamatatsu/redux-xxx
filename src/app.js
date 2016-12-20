import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

import 'lib/css/bootstrap.min.css'

import Site from 'containers/Site.jsx'

render(<Site />, document.getElementById('dom-root'))

if (module.hot) {
  module.hot.accept()
}
