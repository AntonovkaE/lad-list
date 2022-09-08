import React from "react";
import { useEffect } from "react";
import './popup.css'


const Popup = ({ isOpen, name, onClose, children }) => {
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
            <div className={`popup__container popup__container_${name}`}>
                <div className="modal-header">
                    <button onClick={onClose}  type="button" className="btn-close" aria-label="Close"></button>
                </div>
                {children}
                {/*<div className="modal-footer">*/}
                {/*    /!*<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>*!/*/}
                {/*</div>*/}
            </div>
        </div>
        // <div
        //     className={`popup ${isOpen ? "popup_open" : ""} popup_${name}`}
        //     onClick={handleOverlay}
        // >
        //     <div className={`popup__container popup__container_${name}`}>
        //
        //         {children}
        //     </div>
        // </div>
    );
};

export default Popup;


