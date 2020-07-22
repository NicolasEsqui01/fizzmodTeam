import React , {useEffect , useState} from "react";
import { connect } from "react-redux";
import ProductoIndividual from "./ProductoIndividual";
import { itemPicked } from '../../action/picking';
import { getSessionPicking } from '../../action/session'

const ProductoIndividualcontainer = ({items , idSession , getSessionPicking , setItemPicked , token})=> {

    useEffect(() =>{
        getSessionPicking(idSession);
    },[]);

	const ItemPicked = (iditems , qty )=>{
        const data = {
          "token":`${token}`,
          "items":[{
            "id": iditems, 
            "pickedQuantity": qty,
          }]
        };
		sendItemPicked(idSession, data)
	}

    return (
        <ProductoIndividual session={items} pickeado={ItemPicked}/>
    )
};

const MapStateToProps = (state)=> {
    console.log(state)
    return {
        idSession:state.sessionReducer.sessionId, // id de la sesssion
        token:state.sessionReducer.tokenSession.token, // token de la session cuando inicia el picking
        items:state.sessionReducer.sessionPicking.items // los items de la session
    }
};

const MapDispatchToProps = (dispatch)=> {
    return {
        sendItemPicked: (obj) => dispatch(itemPicked(obj)),
        getSessionPicking : (id) => dispatch(getSessionPicking(id))
    }
};

export default connect (MapStateToProps, MapDispatchToProps)(ProductoIndividualcontainer)