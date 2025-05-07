import React from 'react'

interface ControlsProps {
  onInfo: () => void
}

function Controls({ onInfo }: ControlsProps) {
  return (
    <div className="d-flex justify-content-center gap-2 my-3">
      <button className="btn btn-dark" onClick={() => alert('Stop all')}>
        <i className="fas fa-stop"></i> Stop All
      </button>
      <button className="btn btn-info" onClick={onInfo}>
        <i className="fas fa-info-circle"></i> Info
      </button>
    </div>
  )
}

export default Controls
