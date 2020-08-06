import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PickingLibre from "./PickingLibre";



const PickingLibreContainer = ({items})=> {

   
    const [dentro, setDentro] = useState([])
    const [value, setValue] = useState('')
   /*  const [showInput, setShowInput] = useState(false); */

   const handleChange = (event)=>{
      let info = event.target.value
      setValue(info)
   }
 
   const BotonOK = (n)=>{
     setDentro([...dentro, n])
   }

   const BotonBasura = (n)=>{
       const Filtrado = dentro.filter(element => element !== n)
       setDentro(Filtrado)
   }

  useEffect(() => {
   console.log(dentro)
  }, [dentro]);
 

    return (

        <PickingLibre 
         value = {value}
         handleChange = {handleChange }
         BotonOK = {BotonOK}
         dentro = {dentro}
         BotonBasura ={BotonBasura}
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