import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import history from '../../utils/history';
import PickingLibre from './PickingLibre';
import { Activacion, Desactivacion } from '../../action/popup';
import { itemParaSustituir } from '../../action/picking';

const PickingLibreContainer = ({
  items,
  IdItem,
  Activar,
  active,
  handleCloseClick,
  itemsSustituir,
  match,
  sustitutos,
}) => {
  const [dentro, setDentro] = useState([]);
  const [value, setValue] = useState('');
  const date = JSON.parse(localStorage.getItem('canasto'));
  const idSession = localStorage.getItem('sessionid');
  const [itemsSelected, setItemsSelected] = useState([]);
  const [total, setTotal] = useState(0);
  const [acum, setAcum] = useState(0);
  const [idItems, setIdItems] = useState([]);

  if (items === undefined) return history.push(`/productoindividual/${idSession}/1`);
  let Items = items.filter((element) => element.id === IdItem);

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

  const sumar = (n) => {
    let Num = acum + n;
    setAcum(Num);
  };

  const restar = (n) => {
    let Num = acum - n;
    setAcum(Num);
  };

  const valorTotal = (n) => {
    let Num = total + n;
    setTotal(Num);
  };

  const valorResta = (n) => {
    let Num = total - n;
    setTotal(Num);
  };

  useEffect(() => {}, [dentro]);

  const handleClick = (itemSelect) => {
    if (idItems.length > 0 && idItems.includes(itemSelect.id)) {
      setIdItems(idItems.filter((item) => item != itemSelect.id));
      setItemsSelected(
        itemsSelected.filter((item) => item.id != itemSelect.id),
      );
    } else {
      setIdItems((oldArray) => [...oldArray, itemSelect.id]);
      setItemsSelected((oldArray) => [...oldArray, itemSelect]);
    }
  };

  const goToPickSubstitue = () => {
    itemsSustituir(itemsSelected);
    localStorage.setItem('pikingLibre', match.url);
    localStorage.setItem('withSubstitute', true);
    return history.push(`/sustitutos/${idSession}/1`);
  };
  return (
    <PickingLibre
      Activar={Activar}
      total={total}
      valorTotal={valorTotal}
      valorResta={valorResta}
      acum={acum}
      restar={restar}
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
      item={items}
      active={active}
      onCloseClick={handleCloseClick}
      date={date}
      sustitutos={sustitutos}
      idItems={IdItem}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    IdItem: ownProps.match.params.id,
    items: state.sessionReducer.sessionPicking.items, // los items de la session
    sustitutos: state.pickingReducer.ItemsParaSustituir,
    active: state.popupReducer.numero,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Activar: (n) => dispatch(Activacion(n)),
    handleCloseClick: () => dispatch(Desactivacion()),
    itemsSustituir: (obj) => dispatch(itemParaSustituir(obj)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PickingLibreContainer);
