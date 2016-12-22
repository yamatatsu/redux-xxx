// @flow
export type Action =
  { type: 'fetching.set', payload: boolean } |
  { type: 'tables.add', payload: Array<Array<string>> }
