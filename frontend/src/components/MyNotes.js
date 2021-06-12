import React, {useEffect, useState} from 'react';

function MyNotes() {

    const [notes, setNotes] = useState([]);

    const getNotes = async () => {
        try {

            const response = await fetch("http://localhost:3001/notes"); // takes time to fetch data so we await

            const jsonData = await response.json(); // takes time to parse data so we await

            //console.log(jsonData[0].note_content)
            setNotes(jsonData);

            //console.log("retrieving notes");
            
            
            
        } catch (error) {
            console.error(error.message);
            
        }
    }

    useEffect(() => {
        getNotes();
    }, [])

    console.log(notes);


    return (
        <div>
            <h1>All my Notes</h1>
            <ul>
                {notes.map(note => (
                    <li key = {note.note_id}>{note.note_content}</li>
                ))}
            </ul>
        </div>
    )
}

export default MyNotes



// section that gives you all your previous notes

// GET request from backend that displays all notes + re renders after every change
// style this section a bit 

// should come at the bottom of the page 