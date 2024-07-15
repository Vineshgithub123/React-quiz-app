import React from "react";
import "./time-up.scss"

const TimeUpModal = ({ isOpen, onClose }) => {

    const handleButtonClick = (event) => {
        onClose(event)
    }
    
    return (
        <div className={`modal-wrap ${isOpen ? 'open' : ''}`} >
            <div className="modal-content">
                <div className="text">
                    <p>Oopss!!</p>
                    <p>Time Up!!..</p>
                    <button className="view-answer" onClick={handleButtonClick}>View Answer</button>
                </div>
            </div>
        </div>
    )
};

export default TimeUpModal;