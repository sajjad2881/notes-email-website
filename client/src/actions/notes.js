//Part of redux stuff 

import * as api from '../api'

//Action creators -- function that return actions 
//action is just an opject with type and payload
//redux thunk allows us to specify an additional arrow function 
//function that returns another function with async capabilities
export const getNotes = () => async (dispatch) => {
    try {
        const {data} = await api.fetchNotes();
        dispatch({type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }

    // const action = {type: 'FETCH_ALL,', payload: [] }
    // dispatch(action);
}

export const createNote = (note) => async (dispatch) => {
    try {
        const { data } = await api.createNote(note);
        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error.message);
    }


}

