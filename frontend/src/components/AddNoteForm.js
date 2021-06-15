import React, {useState} from 'react';
import axios from 'axios';

function AddNoteForm() {

    const [content, setContent] = useState("");
    
    const [info, setInfo] = useState({
        email: "",
        note_title: "",
        note_content: "",
        tag: "",
        private_or_community: ""
    })

    const handleChange = event => {
        const value = event.target.value;
        setInfo({
            ...info,
            [event.target.name] : value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = {info};

            const response = await fetch("http://localhost:3001/notes", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/";
            
        } catch (error) {
            console.error(error.message);
        }
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
            
    //         axios.post("http://localhost:3001/notes", {
    //             email: "ileghari1@gmail.com",
    //             note_title: info.note_title,
    //             note_content: info.note_content,
    //             tag: "finance",
    //             private_or_community: info.private_or_community
    //         })
    //         .then(res => {
    //             console.log("posted succesfully");
    //             console.log(res);
    //         })
    //         .catch(err => {
    //             console.log("not wokring");
    //             console.error(err.message);
    //         })

    //         window.location = "/";
            
    //     } catch (error) {
    //         console.log("not wokring");
    //         console.error(error.message);
    //     }
    // };


    return (
        <div>
            <h1>Add Notes:</h1>
            <form onSubmit = {handleSubmit}>
                {/* <input type = "textarea" value = {content} onChange = {e => setContent(e.target.value)}/> */}
                <input
                    type = "text" 
                    placeholder = "Enter Note title" 
                    value = {info.note_title} 
                    name = "note_title" 
                    className = "note-input"
                    onChange = {handleChange}>
                </input>
                <input
                    type = "textarea" 
                    placeholder = "Enter Note Content" 
                    value = {info.note_content} 
                    name = "note_content" 
                    className = "note-input"
                    onChange = {handleChange}>
                </input>
                {/* <select id="tag" name="tag">
                    <option value="finance">Finance</option>
                    <option value="productivity">Productivity</option>
                    <option value="xxx">xxx</option>
                    <option value="yyy">yyy</option>
                </select> */}
                <input
                    type = "text" 
                    placeholder = "Private or Community" 
                    value = {info.private_or_community} 
                    name = "private_or_community" 
                    className = "note-input"
                    onChange = {handleChange}>
                </input>
                <button>Add Note</button>
            </form>
            
        </div>
    )
}

export default AddNoteForm


// form with one text field for notes
// submit button
// onSubmit ==> make a POST request to the backend 

// add some styling to the form 


