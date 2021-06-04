import React, {useState} from 'react'

function AddNoteForm() {

    const [info, setInfo] = useState("Enter your notes");


    const handleChange = event => (
        setInfo({value : event.target.value})
    )

    const handleSubmit = event => {
        const requestOptions = {
            method: 'POST',
            headers: {"Access-Control-Allow-Origin":'*','Content-Type': 'application/json'},
            body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        };

        fetch('http://localhost:3001/api', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            setInfo(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });


        //event.preventDefault();
    }


    return (
        <div>
            {/* <form className = 'note-form' onSubmit = {handleSubmit}>
                <label>Add Notes: </label>
                <input type = "textarea" name = "note"/>
                {/* <input type = "textarea" name = "note" value = {info} onChange = {handleChange} className = 'text-field'/>
                <button className = 'add-note-button'>Add Notes</button>
            </form> */}

            <div className = 'note-form'>
                <label>Add Notes: </label>
                <input type = "textarea" name = "note" />
                <button className = 'add-note-button'>Add Notes</button>
            </div>
            
        </div>
    )
}

export default AddNoteForm


// form with one text field for notes
// submit button
// onSubmit ==> make a POST request to the backend 

// add some styling to the form 


