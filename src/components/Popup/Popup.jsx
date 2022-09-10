import React from "react";
import { useEffect } from "react";
import './popup.css'


const Popup = ({ isOpen, name, onClose, background, children }) => {
    useEffect(() => {
        if (!isOpen) return;
        const closeByEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        }
        document.addEventListener('keydown', closeByEscape)
        return () => document.removeEventListener('keydown', closeByEscape)
    }, [isOpen, onClose])

    const handleOverlay = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }
    return (
        <div className={ `modal-xl popup ${isOpen ? "popup_open" : ""} popup_${name}`} onClick={handleOverlay}>
            <div className={`popup__container popup__container_${name}`} style={{ backgroundImage: `url(${background}`}}>
                <div className="popup__close">
                    <button onClick={onClose}  type="button" className="btn-close" aria-label="Close"></button>
                </div>
                {children}
            </div>
        </div>

    );
};

export default Popup;


