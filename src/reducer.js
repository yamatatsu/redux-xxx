// @flow
import i from 'icepick'

import type { Action } from 'action.js'

export type State = {
  fetching: boolean,
  tables: Array<Array<Array<string>>>,
}

const initialState = {
  fetching: false,
  tables: [],
}

export default (state : State = initialState, action: Action) => {
  switch (action.type) {

    case 'fetching.set': {
      const { fetching } = action
      return i.setIn(state, ['fetching'], fetching)
    }

    case 'tables.add': {
      const { table } = action
      return i.updateIn(state, ['tables'], tables => i.push(tables, table))
    }

    default: {
      return state
    }
  }
}
