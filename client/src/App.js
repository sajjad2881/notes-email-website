import React, {useState, useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
//react hook
import { useDispatch } from 'react-redux'

import { getNotes } from './actions/notes'
import Notes from './components/Notes/Notes'
import Form from './components/Form/Form'
import useStyles from './styles'

import toplogo from './images/emaillogo.png'

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(getNotes()); //as soon as this action gets dispatched, we go to notes reducer where we have to handle the logic of fetching all notes // we are fetching data from API and then sending that data through the action.payload, in the reducer we can immedaitely access via action.payload, which are our actual posts 
    }, [dispatch]);


    return (
        <Container maxidth="lg">
            <AppBar position="static" color="inherit" className={classes.appBar}>
                <Typography variant="h2" align="center" className={classes.heading}>Notes Mail App</Typography>
                <img className={classes.image} src={toplogo} alt="logo" height="60" />
            </AppBar>
            <Grow in >
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3} >
                        <Grid item xs={12} sm={7}>
                            <Notes />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;