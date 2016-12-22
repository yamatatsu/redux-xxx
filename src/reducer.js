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
      return i.setIn(state, ['fetching'], action.payload)
    }
    case 'tables.add': {
      return i.updateIn(state, ['tables'], tables => i.push(tables, action.payload))
    }
    default: {
      return state
    }
  }
}
