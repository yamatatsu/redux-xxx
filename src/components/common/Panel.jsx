// @flow
import React from 'react'
import { Row, Col, Panel } from 'react-bootstrap'

type Props = {
  children?: React.Element<*>,
}
export default (props: Props) => (
  <Row>
    <Col sm={3} />
    <Col sm={6}>
      <Panel className="text-center">
        {props.children}
      </Panel>
    </Col>
  </Row>
)
