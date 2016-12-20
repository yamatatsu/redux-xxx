// @flow
import type { Action, PayloadAction } from 'common/types/Action.js'

declare module 'react-router-redux' {
  declare var push: (path: string) => Action | PayloadAction
  declare var goBack: () => Action | PayloadAction
}
