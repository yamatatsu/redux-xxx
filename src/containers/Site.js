// @flow
import { connect } from 'react-redux'

import Main from 'components/Main.jsx'

import type { Action } from 'reducer.js'

const mapStateToProps = (state) => ({
  fuga: state.fuga,
})

const mapDispatchToProps = (dispatch: (action: Action) => void) => ({
  handleClick: () => {
    dispatch({ type: 'INCREMENT' })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
