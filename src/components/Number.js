import React from 'react'



export default ({ n, selected, handleSelected }) => (
  <div
    className="Number"
    onClick={() => handleSelected(n, selected)}
  >
    <span className={selected ? 'selected' : ''}>{n}</span>
  </div>
)