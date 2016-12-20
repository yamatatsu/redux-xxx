// @flow
import type { Action, PayloadAction } from 'common/types/Action.js'

declare module 'redux-actions' {
  declare var createAction: (type: string, payload?: Function) => Action | PayloadAction
}
