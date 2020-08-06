import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import history from '../../utils/history';
import PickingLibre from "./PickingLibre";
import { itemParaSustituir } from '../../action/picking';
import { element } from 'prop-types';

const PickingLibreContainer = ({items, itemsSustituir, IdItem})=> {

  const date = JSON.parse(localStorage.getItem('canasto'))
  const idSession = localStorage.getItem('sessionid')
  const [value, setValue] = useState('')
  const [itemsSelected, setItemsSelected] = useState([])
  const [idItems, setIdItems] = useState([])
  const [dentro, setDentro] = useState([]);

  let Items = items.filter(element => element.id === IdItem)
  let item = Items[0]

  const handleChange = (event) => {
    let info = event.target.value;
    setValue(info);
  };

  const BotonOK = (n) => {
    setDentro([...dentro, n]);
  };

  const BotonBasura = (n) => {
    const Filtrado = dentro.filter((element) => element !== n);
    setDentro(Filtrado);
  };

  useEffect(() => {
    console.log(dentro);
  }, [dentro]);

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
         handleChange={handleChange}
         BotonOK={BotonOK}
         dentro={dentro}
         BotonBasura={BotonBasura}
         idItemsSelected={idItems}
         handleChange = {handleChange}
         handleClick={handleClick}
         goToPickSubstitue={goToPickSubstitue}
         itemsSelected={itemsSelected}
         item={item}
         date={date}
        />
    )
} 

const mapStateToProps = (state, ownProps) => {
  return {
    IdItem : ownProps.match.params.id,
    items: state.sessionReducer.sessionPicking.items, // los items de la session
  };
};

const mapDispatchToProps = (dispatch) => {
    return{
      itemsSustituir: (obj) => dispatch(itemParaSustituir(obj))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PickingLibreContainer);
