//This was made instead of posts.js

import express from 'express';


import {getNotes,createNote } from '../controllers/notes.js' //in react, we don't have to add .js but in node we have to

const router = express.Router();

router.get('/', getNotes);
router.post('/', createNote);



export default router;