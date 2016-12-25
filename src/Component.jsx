// @flow
import React from 'react'

type Props = {
  fetching: boolean,
  tables: Array<Array<Array<string>>>,
  handleClick: Function,
}

export default ({ fetching, tables, handleClick }: Props) => (
  <div>
    <button onClick={handleClick} disabled={fetching}>fetch tables</button>
    <br />
    {tables.map(Table)}
  </div>
)

// ===============================
// 部品

function Table (table, tableIndex) {
  return <table key={tableIndex}><tbody>{table.map(Row)}</tbody></table>
}

function Row (row, rowIndex) {
  return <tr key={rowIndex}>{row.map(Data)}</tr>
}

function Data (data, dataIndex) {
  return <td key={dataIndex}>{data}</td>
}
