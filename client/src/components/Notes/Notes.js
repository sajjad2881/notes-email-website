import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

import { useSelector } from 'react-redux';

import Note from './Note/Note';
import useStyles from './styles';

const Notes = ({ setCurrentId }) => {
  const notes = useSelector((state) => state.notes); //get the notes from the global redux store, can check because .notes is a reducer in the combine reducers thing
  const classes = useStyles();

  console.log(notes.length); // THIS SHOULDN'T BE ZERO

  return !notes.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems='stretch'
      spacing={3}>
      {notes.map((note) => (
        <Grid key={note._id} item xs={12} sm={6}>
          <Note note={note} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Notes;
