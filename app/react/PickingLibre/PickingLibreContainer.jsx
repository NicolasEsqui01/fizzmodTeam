import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import history from '../../utils/history';
import PickingLibre from './PickingLibre';
import { element } from 'prop-types';

const PickingLibreContainer = ({ items, IdItem }) => {
  console.log(items)
  console.log(IdItem)
  const [dentro, setDentro] = useState([]);
  const [value, setValue] = useState('');
  const date = JSON.parse(localStorage.getItem('canasto'));
  const idSession = localStorage.getItem('sessionid');
  const [itemsSelected, setItemsSelected] = useState([]);
  /*  const [showInput, setShowInput] = useState(false); */

let Items = items.filter(element => element.id === IdItem)
let item = Items[0]

console.log(item)

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

  const handleClick = (itemId) => {
    if (itemsSelected.length > 0 && itemsSelected.includes(itemId)) {
      setItemsSelected(itemsSelected.filter((item) => item != itemId));
    } else setItemsSelected((oldArray) => [...oldArray, itemId]);
  };

  const goToPickSubstitue = () => {
    //localStorage.setItem('substitutes',JSON.stringify(itemsSelected))
    history.push({
      //UTILIZA HISTORY PARA ENVIARLE A LA PAG DE CONFIRMACION LOS DATOS CONTRUIDOS Y TERMINAR EL PICKEO DESDE ALLI
      pathname: '/productoindividual',
      state: { idSession: idSession, data: itemsSelected, datosCanasto: date },
    });
  };

  /*    useEffect(() => {
    if (showInput) inputRef.current.focus();
  }, [showInput]);
 */

  return (
    <PickingLibre
      value={value}
      handleChange={handleChange}
      BotonOK={BotonOK}
      dentro={dentro}
      BotonBasura={BotonBasura}
      itemsSelected={itemsSelected}
      handleChange={handleChange}
      handleClick={handleClick}
      goToPickSubstitue={goToPickSubstitue}
      item = {item}
      /*  showInput={showInput}
         setShowInput={setShowInput} */
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    IdItem : ownProps.match.params.id,
    items: state.sessionReducer.sessionPicking.items, // los items de la session
  };
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, null)(PickingLibreContainer);
