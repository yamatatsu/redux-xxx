// @flow
import React from 'react'
import { PageHeader } from 'react-bootstrap'

type Props = {
  children?: React.Element<*>,
}
export default (props: Props) => (
  <PageHeader>{props.children}</PageHeader>
)
