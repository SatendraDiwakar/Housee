import React from "react";
import { FaEnvelope } from 'react-icons/fa'

export default function ContactForm() {
    return (
        <form action="" class="msg-form">
            <input type="text" class="msg-input" placeholder="YOUR NAME" />
            <input type="email" class="msg-input" placeholder="YOUR EMAIL" />
            <textarea
                rows="4"
                class="text-area"
                placeholder="HOW CAN I HELP?"
            ></textarea>
            <a class="msg-btn">
                <FaEnvelope />
            </a>
        </form>
    );
}
