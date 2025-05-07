import React, { useState } from 'react'

import Header from './components/Header'
import PadGrid from './components/PadGrid'
import Controls from './components/Controls'
import ModalInfo from './components/ModalInfo'

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 p-4 bg-dark text-light">
      <div className="w-100" style={{ maxWidth: '1024px' }}>
        <Header />
        <PadGrid />
        <Controls onInfo={() => setShowModal(true)} />
        <ModalInfo show={showModal} onClose={() => setShowModal(false)} />
        <footer className="text-center mt-4">
          <small>Harmonic Pad © 2023 | Designed for focus and relaxation</small>
        </footer>
      </div>
    </div>
  )
}

export default App
