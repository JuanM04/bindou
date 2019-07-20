import React, { useState, useEffect } from 'react';
import './styles.sass'

import Numbers from './components/Numbers'
import Control from './components/Control'



function App() {
  const [numbersSelected, setNumbersSelected] = useState([])
  const [lastNumberSelected, setLastNumberSelected] = useState('0')

  useEffect(() => {
    setLastNumberSelected(numbersSelected[numbersSelected.length - 1] || '0')
  }, [numbersSelected])



  return (
    <>
      <Numbers numbersSelected={numbersSelected} setNumbersSelected={setNumbersSelected} />
      <Control lastNumberSelected={lastNumberSelected} />
    </>
  );
}

export default App;
