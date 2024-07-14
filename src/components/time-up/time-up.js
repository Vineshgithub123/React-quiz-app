import React from "react";
import timeUpLogo from "src/assets/images/time-up.svg";

import "./time-up.scss"

const TimeUpModal = ({ isOpen, onClose }) => {
    const handleButtonClick = (event) => {
        onClose(event)
    }
    return (
        <div className={`modal-wrap ${isOpen ? 'open' : ''}`} >
            <div className="modal-content">
                {/* <img src={timeUpLogo} /> */}
                <div className="text">
                    <p>Oopss!!</p>
                    <p>Time Up!!..</p>
                    <button onClick={handleButtonClick}>asd</button>
                </div>
            </div>
        </div>
    )
};

export default TimeUpModal;