// @flow
import React from 'react'
import { Image } from 'react-bootstrap'
import _ from 'lodash'

import ContentTitle from './common/ContentTitle.jsx'
import Panel from './common/Panel.jsx'

type Guide = { fileName: string, name: string, text: string }
const GUIDES: Array<Guide> = [
  {
    fileName: '001.JPG',
    name: '角田夏樹',
    text: 'やるき！元気！夏樹！',
  },
  {
    fileName: '001.JPG',
    name: '角田夏樹',
    text: 'やるき！元気！夏樹！',
  },
]

export default () => (
  <div>
    <ContentTitle>ガイド紹介</ContentTitle>
    {_.map(GUIDES, (guide, index) => <Profile guide={guide} key={index} />)}
  </div>
)

const Profile = ({ guide }: { guide: Guide }) => (
  <Panel>
    <Image src={`/img/guides/${guide.fileName}`} circle />
    <div style={{ textAlign: 'center' }}>
      <h3>{guide.name}</h3>
      <p>{guide.text}</p>
    </div>
  </Panel>
)
