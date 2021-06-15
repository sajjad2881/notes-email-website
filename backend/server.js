const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const pool = require("./db");
const nodemailer = require("nodemailer");
require("dotenv").config();

app.use(cors());
app.use(express.json()); // lets us add req.body




//ROUTES 

// create a note

app.post("/notes", async (req, res) => {
  try {
    
    const { info } = req.body;
    console.log(info);
    const newNote = await pool.query(
      "INSERT INTO notes (note_title, note_content, email, private_or_community, tag) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [info.note_title, info.note_content, "ileghari1@gmail.com", info.private_or_community, 'productivity']
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
    
    const {id} = req.params;
    const {note_content} = req.body;
    const updateNote = await pool.query("UPDATE notes SET note_content = $1 WHERE note_id = $2",
      [note_content, id]
    );

    res.json("Note was updated")

  } catch (error) {
    console.error(error.message);
  }
})

// delete a note 

app.delete("/notes/:id", async (req, res) => {
  try {

    const { id } = req.params;
    const deleteNote = await pool.query("DELETE FROM notes WHERE note_id = $1", [id]);

    res.json("Note was deleted")
     
  } catch (error) {
    console.error(error.message);

  }
})



//sending an email 


app.post("/send-mail", cors(), async (req, res) => {
  let {text} = req.body;
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER, 
      pass: process.env.MAIL_PASS
    }
  })

  await transport.sendMail({
    from: process.env.MAIL_FROM,
    to: "ileghari@wesleyan.edu",
    subject: "test email",
    html: `<div className="email" style="
    border: 1px solid black;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px;
    ">
    <h2>Here is your test email!</h2>
    <p>${text}</p>

    <p>All the best</p>
      </div>
  `
  })

})



// set port, listen on port 3001 for incoming requests
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});