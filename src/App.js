import Notes from './components/notes';
import List from './components/NotesList';
import AddNote from './components/AddNote';
import { useState } from "react";
import { nanoid } from 'nanoid';

const App = () =>   {
  
   const [notes,setNote] = useState(
    
     [
      {
         id :   nanoid(),
         text:  "absbbs"
      },{
         id :   nanoid(),
         text:  "absbbs"
      },{
         id :   nanoid(),
         text:  "absbbs"
      },{
         id :   nanoid(),
         text:  "absbbs"
      },{
         id :   nanoid(),
         text:  "absbbs"
      },
     ]

   );
   
   const Saveit = (text) => {
    
     const newItem = {
        id : nanoid(),
        text : text,
     }
    const newList =  [...notes , newItem];
    setNote(newList);
    
    

   };

   const deleteNote = (id) => {


     const newNotesList = notes.filter((note) => note.id !== id);
     setNote(newNotesList);

   }



   return (<div>


    <List  NoteArray = {notes}  deleting  = {deleteNote} />

    <AddNote Saving = {Saveit}  Deleting  = {deleteNote}/>

    



  </div>
   
   );

};





export default App;
