import React from "react";
import timeUpLogo from "../../assets/images/time-up.svg";
import rightArrow from "../../assets/images/right-arrow.svg"
import "./time-up.scss"

const TimeUpModal = ({ isOpen, onClose }) => {
    const handleButtonClick = (event) => {
        onClose(event)
    }
    return (
        <div className={`modal-wrap ${isOpen ? 'open' : ''}`} >
            <div className="modal-content">
                {/* <img src={timeUpLogo} /> */}
                <div class="text">
                    <p>Oopss!!</p>
                    <p>Time Up!!..</p>
                </div>
                <button className="try-next-btn" data-text="Try Next Question" onClick={handleButtonClick}>
                    <img className="img" src={rightArrow} /></button>
            </div>
        </div>
    )
};

export default TimeUpModal;