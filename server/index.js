import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/notes.js' // importing notes from the routes folder

const app = express();


//This was the old stuff that he was using, copied new stuff from the comments below it
// app.use(bodyParser.json({limit: "30mb", extended: true}));
// app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.use(cors());

app.use('/notes', postRoutes); //all routes of postRoutes have a prefix of /notes and so are accessed by localhost:5000/notes and not just localhost:5000/



//Using MongoDB here and making a connection
const CONNECTION_URL = 'mongodb+srv://notesmailappadmin:notesmailappadmin1235@cluster0.24nr2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false)







