// @flow
export type Action = { type: 'INCREMENT' }

const initialState = {
  fuga: 1,
}

export default (state : Object = initialState, action: Action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return { fuga: state.fuga + 1 }
    }
    default: {
      return state
    }
  }
}
