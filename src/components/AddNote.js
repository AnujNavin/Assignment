import { useState } from "react";

const AddNote = ({ Saving, Deleting }) => {

  const [inputValue,ValueState] = useState('');

  const HandleChange  =  (event) => {
      ValueState(event.target.value);
  }

  const SaveNotes = () => {

      Saving(inputValue);
      ValueState('');
     
      
  }



  return (
    

    <div className="notes new">
     <textarea className="Input-Space"  value={inputValue} onChange = {HandleChange}>
     </textarea>
     <div>
        <button onClick = {SaveNotes}>

            save

        </button>
       
        
     </div>









    </div>

    

  );










};



export default AddNote;