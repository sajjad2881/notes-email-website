//All the handlers for the routes
//.basically put the function logic here instead of the routes file to keep that file clean and make the app more scalable 
import NoteMessage from '../models/noteMessage.js' //importing the model that we had made for the note 

export const getNotes = async (req, res) => {
    try {
        const noteMessages = await NoteMessage.find();
        console.log(noteMessages)
        res.status(200).json(noteMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createNote = async (req, res) => {
    //res.send('This works part 2');
    const note = req.body;
    const newNote = new NoteMessage(note);
    try {
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        res.status(409).json({message: error.message });
    }
}

