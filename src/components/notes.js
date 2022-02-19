

import { MdDeleteForever } from 'react-icons/md'

const notes = ({ pro , deleting }) => {

    const ID  = pro.id;

    const Delete = () => {

   
        deleting(ID);
      
     
    };
     
    return( 
    
        <div className="notes"> 
     
        {pro.text}

         <MdDeleteForever onClick = {Delete} />

      

         </div>

    );



};

export default notes;