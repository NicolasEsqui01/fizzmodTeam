import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PickingLibre from "./PickingLibre";


const PickingLibreContainer = ({items})=> {

  

    const [value, setValue] = useState('')
   /*  const [showInput, setShowInput] = useState(false); */

   const handleChange = (event)=>{
      let info = event.target.value

      setValue(info)
   }
 

/*    useEffect(() => {
    if (showInput) inputRef.current.focus();
  }, [showInput]);
 */

    return (
        <PickingLibre 
         value = {value}
         handleChange = {handleChange }
        /*  showInput={showInput}
         setShowInput={setShowInput} */
        />
    );
} 

const mapStateToProps = (state) => {
    return{
        items: state.sessionReducer.sessionPicking.items, // los items de la session

    }
};

const mapDispatchToProps = () => {
    
};

  export default connect(mapStateToProps, null)(PickingLibreContainer);