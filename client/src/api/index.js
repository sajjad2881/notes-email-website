import axios from 'axios';

const url = 'http://localhost:5000/notes'; //simply returns all the notes that we currenlty have in the database

export const fetchNotes = () => axios.get(url);
export const createNote = (newNote) => axios.post(url, newNote);
export const updateNote = (id, updatedNote) =>
  axios.patch(`${url}/${id}`, updatedNote);
