import React,{useState} from "react";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Fab from '@material-ui/core/Fab';
import { Zoom } from "@material-ui/core";




function CreateArea(props) {
//creating the input note from the user
  const [inputNote,setInputNote] = useState({
    title:"",
    content:""
  })
  function handleChange(event){
    const newValue = event.target.value;
    const targetName = event.target.name;
    setInputNote((prevValue)=>{
      return({
        title:prevValue.title,
        content:prevValue.content,
        [targetName]:newValue
        })
    })
  }
  function submitNote(event) {
    props.createnote(inputNote);
    setInputNote({
      title: "",
      content: ""
    });
    setExpanded(false)
    event.preventDefault();
  }
  
  
  
//for the responsiveness of the web app
  const [isExpanded,setExpanded] = useState(false);
  function expand(){
    setExpanded(true);
  }
//returning the CreateNote
  return (
    <div>
      <form className="create-note" >
        <div >
            {isExpanded&&<Zoom in={isExpanded}><input 
                onChange={handleChange} 
                name="title" 
                placeholder="Title" 
                value={inputNote.title}  
            /></Zoom>}
            
            <textarea 
                onClick={expand}
                onChange={handleChange}
                name="content" 
                placeholder="Take a note..." 
                rows={isExpanded?3:1}
                value={inputNote.content} 
            />
        </div>
        {isExpanded&&<Zoom in={true}>
            <Fab onClick={submitNote} type="submit">
                <NoteAddIcon/>
            </Fab>
        </Zoom>}
      </form>
    </div>
  );
}

export default CreateArea;