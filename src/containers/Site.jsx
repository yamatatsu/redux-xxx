// @flow
import React, { Component } from 'react'

import Main from 'components/Main.jsx'

export type PAGE_KEY = 'top' | 'price' | 'guides' | 'photos' | 'wether' | 'contact'

export default class Site extends Component {
  constructor (props: any) {
    super(props)
    this.state = {}
    this.handleSelectNavItem = key => {}
  }

  state: {}

  handleSelectNavItem: (key: PAGE_KEY) => void;

  render () {
    return <Main handleSelectNavItem={this.handleSelectNavItem} />
  }
}
