import React from 'react'

const DataCell = ({title, value}) => {
  return (
    <div className="data-cell">
      <h2 className="title-tx text">{title}</h2>
      <h2 className="value-tx text">{value}</h2>
      <hr className="line"/>
    </div>
  )
}


export default DataCell;