import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import history from '../../utils/history';
import PickingLibre from "./PickingLibre";
import { itemParaSustituir } from '../../action/picking';

const PickingLibreContainer = ({items, itemsSustituir})=> {

  const date = JSON.parse(localStorage.getItem('canasto'))
  const idSession = localStorage.getItem('sessionid')
  const [value, setValue] = useState('')
  const [itemsSelected, setItemsSelected] = useState([])
  const [idItems, setIdItems] = useState([])

  const handleChange = (event)=>{
      let info = event.target.value
      setValue(info)
   }

  const handleClick = (itemSelect) => {
    if (idItems.length >0 && idItems.includes(itemSelect.id)) {
      setIdItems(idItems.filter((item)=> item != itemSelect.id))
      setItemsSelected(itemsSelected.filter((item)=> item.id != itemSelect.id))
      } else {
        setIdItems(oldArray => [...oldArray, itemSelect.id])
        setItemsSelected(oldArray => [...oldArray, itemSelect])
      }
  }

  const goToPickSubstitue = () => {
    console.log("estoy por ir al action de pick. con;  ", itemsSelected)
    itemsSustituir(itemsSelected)
    //localStorage.setItem('substitutes',JSON.stringify(itemsSelected))
    localStorage.setItem('withSubstitute', true)
    return history.push(`/sustitutos/${idSession}/1`)
  }

    return (
        <PickingLibre 
         value = {value}
         idItemsSelected={idItems}
         handleChange = {handleChange}
         handleClick={handleClick}
         goToPickSubstitue={goToPickSubstitue}
        />
    )
} 

const mapStateToProps = (state, ownProps) => {
    return{
        items: state.sessionReducer.sessionPicking.items // los items de la session
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
      itemsSustituir: (obj) => dispatch(itemParaSustituir(obj))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PickingLibreContainer);