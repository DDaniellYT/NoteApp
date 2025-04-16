import React from "react";

function AddButton(props){
    return <div className="fixed" onClick={()=>{
        props.setCreateNote(true);
    }}>+</div>;
}

export default AddButton;