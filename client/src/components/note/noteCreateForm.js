import React , {useState} from "react";
import InputField from "./noteInputField";
import FieldSubmit from "./noteFieldSubmit";

function NoteCreateForm(props){
    const [newNote , setNewNote] = useState({});
    if(props.showCreateNote)
        return <div>
        <div className="createContainer" onClick={()=>{props.setCreateNote(false)}}>
                <div className="createNote" onClick={(e)=>{e.stopPropagation()}}>
                    <h1>Create Your note</h1>
                    <div className="noteInput">
                        <InputField label={"Title"} newNote={newNote} setNewNote={setNewNote}/>
                        <InputField label={"Text"} newNote={newNote} setNewNote={setNewNote}/>
                        <FieldSubmit setArray={props.setArray} newNote={newNote} setNewNote={setNewNote} setCreateNote={props.setCreateNote}/>
                    </div>
                </div>
            </div>
        </div>
    else return;
}
export default NoteCreateForm;