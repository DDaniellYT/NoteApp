import React , {useState} from "react";
import Header from "../components/footer-header/header";
import Footer from "../components/footer-header/footer";
import ShowNotes from "./note/showNotes";
import NoteCreateForm from "./note/noteCreateForm";


function App(){
    const [showCreateNote , setCreateNote] = useState(false);
    const [array , setArray] = useState([]);
    return <div>
        <Header setCreateNote={setCreateNote}/>
        <ShowNotes array={array} setArray={setArray}/>
        <NoteCreateForm setArray={setArray} setCreateNote={setCreateNote} showCreateNote={showCreateNote}/>
        <Footer/>
    </div>

}
export default App;