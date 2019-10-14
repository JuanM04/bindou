import React, { useState, useEffect } from 'react'
import './styles.sass'

import Numbers from './components/Numbers'
import Control from './components/Control'

function App() {
  const [numbersSelected, setNumbersSelected] = useState([])
  const [lastNumberSelected, setLastNumberSelected] = useState('0')
  const [currentVoice, setCurrentVoice] = useState(false)

  useEffect(() => console.log(currentVoice), [currentVoice])

  useEffect(() => {
    setLastNumberSelected(numbersSelected[numbersSelected.length - 1] || '0')
  }, [numbersSelected])

  function tts(text) {
    if (!currentVoice) return

    let msg = new SpeechSynthesisUtterance(text)
    msg.voice = currentVoice
    speechSynthesis.speak(msg)
  }

  return (
    <>
      <Numbers
        numbersSelected={numbersSelected}
        setNumbersSelected={setNumbersSelected}
        tts={tts}
      />
      <Control
        lastNumberSelected={lastNumberSelected}
        currentVoice={currentVoice}
        setCurrentVoice={setCurrentVoice}
      />
    </>
  )
}

export default App
