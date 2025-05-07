import React, { useState, useRef } from 'react'

interface PadButtonProps {
  note: string
  freq: number
}

function PadButton({ note, freq }: PadButtonProps) {
  const [isActive, setIsActive] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handlePlay = () => {
    // Aqui você pode implementar a lógica de tocar som
    setIsActive(true)
    // Exemplo: usar Web Audio API ou um áudio pré-carregado
  }

  const handleStop = () => {
    setIsActive(false)
  }

  return (
    <button
      className={`btn ${isActive ? 'btn-primary' : 'btn-secondary'} w-100 text-light`}
      onMouseDown={handlePlay}
      onMouseUp={handleStop}
    >
      {note}
    </button>
  )
}

export default PadButton
