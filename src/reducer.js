// @flow
import i from 'icepick'

export type Action = { type: 'tables.add', payload: Array<Array<string>> }

const initialState = {
  tables: [],
}

export default (state : Object = initialState, action: Action) => {
  switch (action.type) {
    case 'tables.add': {
      return i.updateIn(state, ['tables'], tables => i.push(tables, action.payload))
    }
    default: {
      return state
    }
  }
}
