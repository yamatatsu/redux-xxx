// @flow
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Main from 'Component.jsx'
import action from 'action.js'

import type { State } from 'reducer.js'

const mapStateToProps = (state: State) => ({
  fetching: state.fetching,
  tables: state.tables,
})

const mapDispatchToProps = (dispatch) => bindActionCreators(action, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)
