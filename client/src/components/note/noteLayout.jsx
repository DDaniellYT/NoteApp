import React from "react";


function NoteLayout(props){
    return <div className="noteStyle">
            <div className="deleteNote" onClick={()=>{props.handleDelete(props.id)}}>D</div>
            <h2> {props.title} </h2>
            <p> {props.text}</p>
    </div>;
}

export default NoteLayout;
