import React, {useEffect, useState} from 'react';

function MyNotes() {

    const [notes, setNotes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortValue, setSortValue] = useState('');

    const handleSelectChange = event => {
        const value = event.target.value;
        setSortValue(value);
    }


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


    // deleting notes function

    const deleteNote =  async (id) => {
        try {

            const deleteNote = await fetch(`http://localhost:3001/notes/${id}/`, {
                method: 'DELETE',
            });
            //console.log("deleted");
            //console.log(deleteNote);

            // updates list to exclude deleted notes
            setNotes(notes.filter(note => note.note_id !== id))
            
        } catch (err) {
            console.error(err.message);
        }
    }



    return (
        <div className = 'container'>
            <h1>All my Notes</h1>
            <input type = "text" className = "search-bar" placeholder = "Search by Note title or Tag Name" onChange = {(e) => {setSearchTerm(e.target.value)}} />

            {/* add a filter by category method */}

            <ul className = 'list-container'>
                {notes.filter(note => {
                    if (searchTerm == "") {
                        return note
                    } else if (note.note_content.toLowerCase().includes(searchTerm.toLowerCase())) { // use an or case that includes tag name as well
                        return note
                    }
                })
                .map(note => (
                    <li key = {note.note_id} className = 'notes-list'>
                        <button className = 'note-title-button'>{note.note_content}</button>
                        <div className = "align-right">
                            <button className = "note-update-button" >Edit</button> 
                            <button className = "note-delete-button" onClick = {() => deleteNote(note.note_id)}>Delete</button>
                        </div> 
                    </li>
                   
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