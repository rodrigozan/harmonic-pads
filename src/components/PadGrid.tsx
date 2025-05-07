import React from 'react'

import PadButton from './PadButton'

const notes = [
  { note: 'C', freq: 261.6 },
  { note: 'C#', freq: 277.2 },
  { note: 'D', freq: 293.7 },
  { note: 'D#', freq: 311.1 },
  { note: 'E', freq: 329.6 },
  { note: 'F', freq: 349.2 },
  { note: 'F#', freq: 370.0 },
  { note: 'G', freq: 392.0 },
  { note: 'G#', freq: 415.3 },
  { note: 'A', freq: 440.0 },
  { note: 'A#', freq: 466.2 },
  { note: 'B', freq: 493.9 },
]

function PadGrid() {
  return (
    <div className="d-grid gap-2" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
      {notes.map(({ note, freq }) => (
        <PadButton key={note} note={note} freq={freq} />
      ))}
    </div>
  )
}

export default PadGrid
