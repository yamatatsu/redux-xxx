// @flow
import React from 'react'
import { Table } from 'react-bootstrap'
import _ from 'lodash'

import ContentTitle from './common/ContentTitle.jsx'
import Panel from './common/Panel.jsx'

const COLS = ['種別', '料金']
const data = [
  { kind: '大人', price: '2,900円' },
  { kind: '中・高生', price: '1,000円' },
  { kind: '小学生', price: '500円' },
]

export default () => (
  <div>
    <ContentTitle>料金</ContentTitle>
    <Panel>
      <Table fill striped bordered condensed hover>
        <thead>
          <tr>
            {_.map(COLS, (text, key) => <th key={key} className="text-center">{text}</th>)}
          </tr>
        </thead>
        <tbody>
          {_.map(data, ({ kind, price }, index) => (
            <tr key={index}>
              <td>{kind}</td>
              <td>{price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Panel>
  </div>
)
