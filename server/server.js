import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import bodyParser from "body-parser";

sqlite3.verbose();
const db = new sqlite3.Database('./db/dataBase.db');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
const port = 8080;

let noteArray = [];

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS notes (
    title TEXT,
    text TEXT
  )
`;

db.run(createTableQuery);

app.post('/addNote' , (req , res)=>{ /// add note to db
    const note = req.body.note;
    console.log(note);
    insertNote(note);
    getAllNotes();
    noteArray = [...noteArray , req.body.note];
    res.send(noteArray);
});
app.get('/notes' , (req , res)=>{ /// send all notes from db to f_end
    getAllNotes();
    res.send(noteArray);
});
app.post('/delete' , (req , res)=>{ /// delete the note specified and send to f_end
    const deleteQuery = `DELETE FROM notes WHERE title = "${noteArray[req.body.index].title}"`;
    noteArray.splice(req.body.index , 1);
    db.run(deleteQuery);
    res.send(noteArray);
})

app.listen(port ,()=>{console.log(` ${port} on`)});














function getTitles(row , index){
    noteArray[index].title=row.title;
}
function getTexts(row , index){
    noteArray[index].text=row.text;
}
function getAllNotes(){
    const titles = 'SELECT title FROM notes';
    const texts = 'SELECT text FROM notes';
    db.all(titles , [] , (err , rows)=>{
        noteArray = [];
        rows.map(()=>{noteArray.push({})});
        rows.map(getTitles);
    });
    db.all(texts , [] , (err , rows)=>{
        rows.map(getTexts);
    });
}
function insertNote(note){
    let title = note.title;
    let text = note.text;

    if(!title)title = "";
    if(!text)text = "";
    const insertQuery = `
    INSERT INTO notes(title , text) VALUES ("${title}","${text}")
    `;
    db.run(insertQuery);
}