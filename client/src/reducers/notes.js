//Part of redux stuff 

//A reducer is a function that accepts the state and action 
//based on action type, we want to do some logic 
//return state based on the action 
//notes is the state


export default (notes = [], action) => {
    //console.log("we here")
    //console.log("action type is" + action.type)
    switch(action.type){
        case 'FETCH_ALL':
            //console.log("we here part 2")
            return notes;
        case 'CREATE':
            return [... notes, action.payload];
        default:
            //console.log("we here part 3")
            return notes;      
    }
};