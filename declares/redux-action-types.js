// @flow
declare module 'redux-action-types' {
  declare var createTypes: (prefix: string, ...types: Array<string>) => { [key: string]: string }
}
