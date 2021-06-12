const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const pool = require("./db");


app.use(cors());
app.use(express.json()); // lets us add req.body


//ROUTES 

// create a note

// app.post("/notes", async (req, res) => {
//   try {
    
//     const { email, note_content, private_or_community, date_time_created } = req.body;
//     const newNote = await pool.query(
//       "INSERT INTO notes (email, note_content, private_or_community, date_time_created) VALUES($1) RETURNING *",
//       [email, note_content, private_or_community, date_time_created]
//     );

//     res.json(newNote.rows[0]);

//   } catch (error) {
//     console.error(error.message);
//   }
// })

app.post("/notes", async (req, res) => {
  try {
    
    const { content } = req.body;
    const newNote = await pool.query(
      "INSERT INTO notes (note_content, email, private_or_community) VALUES($1, $2, $3) RETURNING *",
      [content, "ileghari1@gmail.com", true]
    );

    res.json(newNote.rows[0]);

  } catch (error) {
    console.error(error.message);
    console.log("here");
  }
})

// get all notes

app.get("/notes", async (req, res) => {
  try {
    
    const allNotes = await pool.query("SELECT * FROM notes");
    res.json(allNotes.rows);


  } catch (error) {
    console.error(error.message);
  }
})

// update a note ??

app.put("/notes/:id", async (req, res) => {
  try {
    
    const {note_id} = req.params;
    const {note_content} = req.body;
    const updateNote = await pool.query("UPDATE notes SET note_content = $1 WHERE note_id = $2",
      [note_content, note_id]
    );

    res.json("Note was updated")

  } catch (error) {
    console.error(error.message);
  }
})

// delete a note 

app.delete("/notes/:id", async (req, res) => {
  try {

    const { note_id } = req.params;
    const deleteNote = await pool.query("DELETE FROM notes WHERE note_id = $1", [note_id]);

    res.json("Note was deleted")
     
  } catch (error) {
    console.error(error.message);

  }
})









// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: true }));

// const db = require("./models");
// db.sequelize.sync();


//simple route for test
// app.get("/", (req, res) => {
//     res.json({ message: "Hello from backend!" });
//   });


// set port, listen on port 3001 for incoming requests
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});