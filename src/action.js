// @flow
export type Action =
  { type: 'fetching.set', fetching: boolean } |
  { type: 'tables.add', table: Array<Array<string>> }
