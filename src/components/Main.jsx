// @flow
import React from 'react'

type Props = {
  tables: Array<Array<Array<string>>>,
  handleClick: Function,
}

export default ({ tables, handleClick }: Props) => (
  <div>
    <button onClick={handleClick}>fetch tables</button>
    <br />
    {tables.map((table, tableIndex) => (
      <table key={tableIndex}>
        <tbody>
          {table.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((data, dataIndex) => <td key={dataIndex}>{data}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    ))}
  </div>
)
