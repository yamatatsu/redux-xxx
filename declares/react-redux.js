// @flow
declare module 'react-redux' {
  declare var connect: (
    mapStateToProps?: Function,
    mapDispatchToProps?: (dispatch: Function) => { [key: string]: Function },
    mergeProps?: Function
  ) => Function
}
