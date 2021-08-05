import React from 'react';

import { useSelector } from 'react-redux';

import Note from './Note/Note';
import useStyles from './styles'


const Notes = () => {
    const notes = useSelector((state) => state.notes); //get the notes from the global redux store, can check because .notes is a reducer in the combine reducers thing
    const classes = useStyles();

    console.log(notes);

    return (
        <>
        <h1>Notes</h1>
        <Note /> 
        </>
    )
}

export default Notes