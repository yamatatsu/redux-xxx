// @flow
import { connect } from 'react-redux'

import Main from 'Component.jsx'

import type { State } from 'reducer.js'

const mapStateToProps = (state: State) => ({
  fetching: state.fetching,
  tables: state.tables,
})

const mapDispatchToProps = (dispatch) => ({
  handleClick: () => dispatch({ type: 'saga.handleClick' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
