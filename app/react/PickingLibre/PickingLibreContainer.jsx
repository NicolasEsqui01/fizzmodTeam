import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import history from '../../utils/history';
import PickingLibre from "./PickingLibre";


const PickingLibreContainer = ({items})=> {

  const date = JSON.parse(localStorage.getItem('canasto'))
  const idSession = localStorage.getItem('sessionid')
  const [value, setValue] = useState('')
  const [itemsSelected, setItemsSelected] = useState([])
   /*  const [showInput, setShowInput] = useState(false); */

  const handleChange = (event)=>{
      let info = event.target.value
      setValue(info)
   }

  const handleClick = (itemId) => {
    if (itemsSelected.length >0 && itemsSelected.includes(itemId)) {
      setItemsSelected(itemsSelected.filter((item)=> item != itemId))
      } else setItemsSelected(oldArray => [...oldArray, itemId])
  };

  const goToPickSubstitue = () => {
    //localStorage.setItem('substitutes',JSON.stringify(itemsSelected))
    history.push({ //UTILIZA HISTORY PARA ENVIARLE A LA PAG DE CONFIRMACION LOS DATOS CONTRUIDOS Y TERMINAR EL PICKEO DESDE ALLI
        pathname: '/productoindividual',
        state: { idSession: idSession, data: itemsSelected, datosCanasto: date },
      });
  }
 
/*    useEffect(() => {
    if (showInput) inputRef.current.focus();
  }, [showInput]);
 */

    return (
        <PickingLibre 
         value = {value}
         itemsSelected={itemsSelected}
         handleChange = {handleChange}
         handleClick={handleClick}
         goToPickSubstitue={goToPickSubstitue}
        /*  showInput={showInput}
         setShowInput={setShowInput} */
        />
    );
} 

const mapStateToProps = (state, ownProps) => {
    return{
        items: state.sessionReducer.sessionPicking.items // los items de la session
    }
};

const mapDispatchToProps = () => {
    
};

  export default connect(mapStateToProps, null)(PickingLibreContainer);