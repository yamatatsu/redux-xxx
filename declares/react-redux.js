// @flow
declare module 'react-redux' {
  declare var connect: <S, D>(
    mapStateToProps?: (state: Object) => S,
    mapDispatchToProps?: (dispatch: Function) => D
  ) => (component: (props: S & D) => Object) => Object
}
