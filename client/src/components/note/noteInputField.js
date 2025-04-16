import React from "react";

function InputField(props){
    let place = "title";
    if(props.label !== "Title")place = "text";
    return <div>
        <div className="noteCreationText">{props.label}:</div>
        <input onChange={(event)=>{
            props.setNewNote({...props.newNote,[place]:event.target.value})
        }}></input>
    </div>;   
}
export default InputField;