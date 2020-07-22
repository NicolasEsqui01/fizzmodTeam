import React from "react";
import { connect } from "react-redux";
import ProductoIndividual from "./ProductoIndividual";
import {itemPicked} from '../../action/picking';

const ProductoIndividualcontainer = ({estado, session})=> {

	const setItemPicked = (idSession, idItem , qty)=>{
		//cambia el estado a picked
        const data = {
          "token":"", //LO CONSIGUE NICO
          "items":[{
            "id": idItem, 
            "pickedQuantity": qty,
          }]
        };

		sendItemPicked(idSession, data);
	}

    return (
        <ProductoIndividual estado={estado} session={session} pickeado={setItemPicked}/>
    )
};

const MapStateToProps = (state)=> {
    return {
    	   	estado: state,
    }
};

const MapDispatchToProps = (dispatch)=> {
    return {
        sendItemPicked: (obj) => dispatch(itemPicked(obj)),
    }
};

export default connect (MapStateToProps, MapDispatchToProps)(ProductoIndividualcontainer)