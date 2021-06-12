import React, {useState} from 'react'

function AddNoteForm() {

    const [content, setContent] = useState("");

    const handleSubmit = async (e ) => {
        e.preventDefault();
        try {
            const body = {content};

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


    return (
        <div>
            <h1>Add Notes:</h1>
            <form onSubmit = {handleSubmit}>
                <input type = "textarea" value = {content} onChange = {e => setContent(e.target.value)}/>
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


