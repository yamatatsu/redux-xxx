// @flow
import React from 'react'

type Props = {
  fuga: number,
  handleClick: Function,
}

export default ({ fuga, handleClick }: Props) => (
  <div>
    <button onClick={handleClick}>hoge</button>
    <br />
    <div>fuga: {fuga}</div>
  </div>
)
