import React from "react";
import AddButton from "./AddButton";

function Header(props){
    return <div className="navBar">
        <h1 className="navTitle">Keeper</h1>
        <AddButton setCreateNote={props.setCreateNote}/>
    </div>
}
export default Header;
