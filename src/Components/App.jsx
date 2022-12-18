import React,{useState} from "react";
import Header from "./Header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./CreateArea";


function App(){
    


    const [notes,setNotes] = useState([])

    function createNote(inputNote){
        setNotes(prevItems => {
            return [...prevItems, inputNote];
          });
    }
    function DeleteNote(id){
        console.log("delete triggered",id)
        setNotes((prevValue)=>{
            return [...prevValue.filter((note,index)=>{return index!==id})]
        })
    }
    return(
        <div>
            <Header />
            <CreateArea createnote={createNote}/>
            {notes.map((note,index) => <Note key={index} id={index} title={note.title} content={note.content} onDelete={DeleteNote}/>)}
            <Footer />
        </div>
    )
}

export default App;