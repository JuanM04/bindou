import React, { useState } from 'react'
import { Button, Icon, Input, Modal, Dropdown } from 'flwww'

const { ipcRenderer } = window.require('electron')

export default ({ lastNumberSelected, currentVoice, setCurrentVoice }) => {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [title, setTitle] = useState('BinDOU')
  const voices = window.speechSynthesis
    .getVoices()
    .filter(voice => voice.lang.startsWith('es'))

  function toggleModal() {
    setModalIsVisible(!modalIsVisible)
  }

  return (
    <div className="Control">
      <h1>{title}</h1>

      <h2>{lastNumberSelected}</h2>

      <footer>
        <Button
          round
          colors={{ mainColor: '#fff', secondColor: '#212121' }}
          onClick={toggleModal}
        >
          <Icon type="settings" /> Configuración
        </Button>
      </footer>

      <Modal isVisible={modalIsVisible} toggleModal={toggleModal}>
        <label>Título</label>
        <Input
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <br />
        <br />

        <label>Voz: {currentVoice ? currentVoice.name : 'Desactivada'}</label>
        <br />
        <Dropdown
          elementList={voices.map(voice => (
            <button onClick={() => setCurrentVoice(voice)}>{voice.name}</button>
          ))}
        >
          <Button type="primary">Cambiar narrador</Button>
        </Dropdown>

        <br />
        <br />
        <br />
        <br />
        <br />

        <Button
          round
          outlined
          type="danger"
          onClick={() => ipcRenderer.send('close')}
        >
          Salir de BinDOU
        </Button>
      </Modal>
    </div>
  )
}
