import React from 'react'
import _range from 'lodash/range'

import Number from './Number'



export default ({ numbersSelected, setNumbersSelected }) => {
  function handleSelected(n, selected) {
    if(selected) {
      let arr = [...numbersSelected]  // Inmutability :)
      arr.splice(arr.indexOf(n), 1)
      setNumbersSelected(arr)
    } else {
      setNumbersSelected(numbersSelected.concat(n))
    }
  }



  return(
    <div className="Numbers">
      { _range(1, 90+1).map(n => (
        <Number
          key={n}
          n={n}
          selected={numbersSelected.indexOf(n) !== -1}
          handleSelected={handleSelected}
        />
      )) }
    </div>
  )
}