import React from "react";
import axios from "axios";

function FieldSubmit(props){
    const newnote={
        ...props.newNote
    }
    return <div className="submit" onClick={()=>{        
        axios.post('http://localhost:8080/addNote' ,{note:newnote}).then(response=>{
            props.setArray([...response.data]);
            console.log("setted array");
        });
        props.setNewNote({});
        props.setCreateNote(false);
    }}>Submit</div>
}

export default FieldSubmit;