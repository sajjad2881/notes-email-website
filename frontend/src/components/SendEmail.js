import React, {useState} from 'react';
import axios from "axios";

function SendEmail() {

    const [text, setText] = useState("");

    const handleSend = async() => {
        try {
            await axios.post("http://localhost:3001/send-mail", {
                text
            })

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <form onSubmit = {handleSend}>
                <input type = "text" value = {text} onChange = {(e) => setText(e.target.value)} />
                <button type = "submit">Send Email</button>
            </form>
            
        </div>
    )
}

export default SendEmail
