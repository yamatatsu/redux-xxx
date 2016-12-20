// @flow
import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import _ from 'lodash'

import type { PAGE_KEY } from 'containers/Site.jsx'

const NAV_ITEMS: { [key: PAGE_KEY]: string } = {
  top: 'TOP',
  price: '料金',
  guides: 'ガイド紹介',
  photos: '写真',
  wether: '天気',
  contact: 'お問い合わせ',
}

export default ({ onSelect }: { onSelect: Function }) => (
  <Navbar>
    <Nav onSelect={onSelect}>
      {_.map(NAV_ITEMS, (text, key) => (
        <NavItem key={key} eventKey={key}>{text}</NavItem>
      ))}
    </Nav>
  </Navbar>
)
