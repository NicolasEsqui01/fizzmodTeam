import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ProductoIndividual from './ProductoIndividual';
import { itemPicked } from '../../action/picking';
import { getSessionPicking } from '../../action/session';
import history from '../../utils/history';
import Navbar from '../Navbar/NavbarContainer';

const ProductoIndividualcontainer = ({
  items,
  idSession,
  getSessionPicking,
  sendItemPicked,
  token,
}) => {

  const [indice, setIndice] = useState(0);
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [count, setCount] = useState(0);
  const[active, setActive] = useState(0)

  let updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const start = () => {
    run();
    //setInterv(setInterval(run, 10));
  };

 
    const  handleBtnClick = (n) => {
              setActive(n)
          };
    
    
    const  handleCloseClick = () => {
           setActive(0)
         };


  useEffect(() => {
    getSessionPicking(idSession)
  }, [indice]);

  const ItemPicked = (iditems, qty) => {
    const data = {
      token: `${token}`,
      items: [
        {
          id: iditems,
          pickedQuantity: qty,
        },
      ],
    };
    sendItemPicked(idSession, data).then(() => {
      if (indice + 1 < items.length) {
        return setIndice(indice + 1);
      } else {
        stop();
        return history.push('/inicio');
      }
    });
  };
  return (
    <>
      <Navbar time={time} status={status} booleano={true} />
      <ProductoIndividual
        Activar = {handleBtnClick}
        active = {active}
        onCloseClick = {handleCloseClick}
        session={items}
        pickeado={ItemPicked}
        indice={indice}
        count={count}
        setCount={setCount}
      />
    </>
  );
};

const MapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    idSession: ownProps.match.params.id, // id de la sesssion
    token: state.sessionReducer.tokenSession.token, // token de la session cuando inicia el picking
    items: state.sessionReducer.sessionPicking.items, // los items de la session
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    sendItemPicked: (id, obj) => dispatch(itemPicked(id, obj)),
    getSessionPicking: (id) => dispatch(getSessionPicking(id)),
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps,
)(ProductoIndividualcontainer);
