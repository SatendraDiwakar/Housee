import React from "react";
import { FaEnvelope } from 'react-icons/fa'

export default function ContactForm() {
    return (
        <form action="" className="msg-form">
            <input type="text" className="msg-input" placeholder="YOUR NAME" />
            <input type="email" className="msg-input" placeholder="YOUR EMAIL" />
            <textarea
                rows="4"
                className="text-area"
                placeholder="HOW CAN I HELP?"
            ></textarea>
            <button className="msg-btn" style={{ background: "transparent", border: "none" }}>
                <FaEnvelope />
            </button>
        </form>
    );
}
