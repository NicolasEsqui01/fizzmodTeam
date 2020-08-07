import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import history from '../../utils/history';
import PickingLibre from './PickingLibre';
import {Activacion, Desactivacion } from '../../action/popup';

const PickingLibreContainer = ({ items, IdItem, Activar, active, handleCloseClick }) => {
  console.log(items)

  const [dentro, setDentro] = useState([]);
  const [value, setValue] = useState('');
  const date = JSON.parse(localStorage.getItem('canasto'));
  const idSession = localStorage.getItem('sessionid');
  const [itemsSelected, setItemsSelected] = useState([]);
  const [total , setTotal] = useState(0)
  const [acum, setAcum] = useState(0)
  /*  const [showInput, setShowInput] = useState(false); */

if(items === undefined) return history.push(`/productoindividual/${idSession}/1`);
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

  
  const sumar = (n)=>{
   let Num = acum + n
    setAcum(Num)
  };
  
  const restar = (n)=>{
    let Num = acum - n
     setAcum(Num)
   };

   const valorTotal = (n) =>{
     let Num = total + n
     setTotal(Num)
   }

   const valorResta = (n) =>{
     let Num = total - n
     setTotal(Num)
 
  }
 
  useEffect(() => {
     
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
      Activar={Activar}
      total = {total}
      valorTotal = {valorTotal}
      valorResta = {valorResta}
      acum ={acum}
      restar = {restar}
      sumar={sumar}
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
      active ={active}
      onCloseClick={handleCloseClick}
      /*  showInput={showInput}
         setShowInput={setShowInput} */
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    IdItem : ownProps.match.params.id,
    items: state.sessionReducer.sessionPicking.items, // los items de la session
    active: state.popupReducer.numero,
  };
};

const mapDispatchToProps = (dispatch) => {

  return{
    Activar: (n) => dispatch(Activacion(n)),
    handleCloseClick: () => dispatch(Desactivacion()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PickingLibreContainer);
