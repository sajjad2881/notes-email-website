import React, {useState} from 'react';
import {TextField, Button, Typography, Paper, Checkbox} from '@material-ui/core'
import useStyles from './styles'
import  FileBase from 'react-file-base64'
import { useDispatch} from 'react-redux'
import {createNote} from '../../actions/notes'


const Form = () => {
    const [noteData, setNoteData] = useState({
        creator: '',
        title: '',
        content: '', //here for message
        tags: '',
        selectedFile: '',
    });
    const classes = useStyles();
    const dispatch = useDispatch();

    const clear = () => {
        //setCurrentId(0);
        //setNoteData({ creator: '', title: '', content: '', community: '',tags: '', selectedFile: '' });
      };


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createNote(noteData))
    } 

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}  onSubmit={handleSubmit} >
                <Typography variant="h6">Add a Note</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={noteData.creator} onChange={(e) => setNoteData({ ...noteData, creator: e.target.value})} //spreading it so that it is not overwritten
                />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={noteData.title} onChange={(e) => setNoteData({ ...noteData, title: e.target.value})} //spreading it so that it is not overwritten
                />
                <TextField name="content" variant="outlined" label="Content" fullWidth value={noteData.content} onChange={(e) => setNoteData({ ...noteData, content: e.target.value})} //spreading it so that it is not overwritten
                />
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={noteData.tags} onChange={(e) => setNoteData({ ...noteData, tags: e.target.value})} //spreading it so that it is not overwritten
                />
                <TextField name="community" variant="outlined" label="Community" fullWidth value={noteData.community} onChange={(e) => setNoteData({ ...noteData, community: e.target.value})} //spreading it so that it is not overwritten
                />
                 <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setNoteData({ ...noteData, selectedFile: base64 })} /></div>
                 <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                 <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    )
}

export default Form