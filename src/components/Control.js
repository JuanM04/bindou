import React, { useState } from 'react'
import { Button, Icon, Input, Modal } from "flwww"



export default ({ lastNumberSelected }) => {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [title, setTitle] = useState('BinDOU')

  function toggleModal() {
    setModalIsVisible(!modalIsVisible)
  }



  return(
    <div className="Control">
      <h1>{title}</h1>

      <h2>{lastNumberSelected}</h2>

      <footer>
        <Button
          round
          colors={{ mainColor: "#fff", secondColor: "#212121" }}
          onClick={toggleModal}
        >
          <Icon type="settings" /> Configuración
        </Button>
      </footer>



      <Modal
        isVisible={modalIsVisible}
        toggleModal={toggleModal}
      >
        <label>Título</label>
        <Input
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <br/>
        <br/>

        <Button
          round
          outlined
          type="danger"
          onClick={() => {}}
        >
          Salir de BinDOU
        </Button>
      </Modal>
    </div>
  )
}