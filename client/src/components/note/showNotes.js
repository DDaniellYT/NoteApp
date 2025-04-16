import NoteLayout from "./noteLayout";
import React , {useEffect, useState} from "react";
import axios from "axios";

function ShowNotes(props){
    useEffect(()=>{
        axios.get('http://localhost:8080/notes').then(response=>props.setArray([...response.data]))
    },[]);
    function deleteNote(id){
        axios.post('http://localhost:8080/delete' ,{index:id}).then(response=>props.setArray([...response.data]));
    }
    function createNote(note , index){
        return <NoteLayout key={index} id={index} title={note.title} text={note.text} handleDelete={deleteNote}/>
    }
    return props.array.map(createNote);
}

export default ShowNotes;