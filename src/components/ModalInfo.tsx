import React, { useState, useEffect } from 'react'

interface ModalProps {
    show: boolean
    onClose: () => void
}

function ModalInfo({ show, onClose }: ModalProps) {
    const [visible, setVisible] = useState(false)
    const [opacity, setOpacity] = useState(0)

    useEffect(() => {
        if (show) {
            setVisible(true);
            // Pequena demora para aplicar o fade in
            setTimeout(() => setOpacity(1), 10);
        } else {
            setOpacity(0);
            // Após o fade out, remove do DOM
            const timeout = setTimeout(() => setVisible(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [show]);

    if (!show && !visible) return null

    return (
        <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75"
            style={{
                transition: 'opacity 0.3s',
                opacity: opacity,
                pointerEvents: show ? 'auto' : 'none',
            }}
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-dark text-light border-0 rounded-3 p-3">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="modal-title">About Harmonic Pad</h5>
                        <button className="btn btn-close btn-close-white" onClick={onClose}></button>
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
