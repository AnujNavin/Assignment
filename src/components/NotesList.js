
import Notes from './notes';

const List = ({ NoteArray , deleting }) => {


  return (

 <div className="Items">
  

  {
  
  NoteArray.map((note) => <Notes pro = {note}  deleting = {deleting}/>)

 }

  
  
  </div>



  );








};

export default List;