// @flow
import React from 'react'
import { Grid } from 'react-bootstrap'

import Jumbotron from './Jumbotron.jsx'
import Navbar from './Navbar.jsx'
import Top from './Top.jsx'
import Price from './Price.jsx'
import Guides from './Guides.jsx'

type Props = {
  handleSelectNavItem: Function,
}

export default ({ handleSelectNavItem }: Props) => (
  <div>
    <Jumbotron />
    <Navbar onSelect={handleSelectNavItem} />
    <Grid>
      <Top />
      <Price />
      <Guides />
    </Grid>
  </div>
)
