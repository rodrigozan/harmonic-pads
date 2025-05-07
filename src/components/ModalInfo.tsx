import React from 'react'

interface ModalProps {
  show: boolean
  onClose: () => void
}

function ModalInfo({ show, onClose }: ModalProps) {
  if (!show) return null

  return (
    <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark text-light">
          <div className="modal-header">
            <h5 className="modal-title">About Harmonic Pad</h5>
            <button className="btn-close btn-close-white" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p>Harmonic Pad provides continuous musical tones that can help with:</p>
            <ul>
              <li>Meditation and mindfulness</li>
              <li>Focus and concentration</li>
              <li>Creative work and flow states</li>
              <li>Sound therapy and relaxation</li>
            </ul>
            <p>Each note plays for 60 minutes with smooth fade transitions. Press the same note to stop it.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalInfo
