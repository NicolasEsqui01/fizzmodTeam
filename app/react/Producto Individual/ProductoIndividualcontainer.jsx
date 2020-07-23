import React , {useEffect , useState} from "react";
import { connect } from "react-redux";
import ProductoIndividual from "./ProductoIndividual";
import { itemPicked } from '../../action/picking';
import { getSessionPicking } from '../../action/session'

const ProductoIndividualcontainer = ({items , idSession , getSessionPicking , setItemPicked , token})=> {

    const[count, setCount] = useState(0)

    useEffect(() => {
       
    },[])

    useEffect(() =>{
        getSessionPicking(idSession);
    },[]);

	const ItemPicked = (iditems , count )=>{
        const data = {
          "token":`${token}`,
          "items":[{
            "id": iditems, 
            "pickedQuantity": count,
          }]
        };
		sendItemPicked(idSession, data)
	}

    return (
        <ProductoIndividual session={items} pickeado={ItemPicked} setCount={setCount} count={count}/>
    )
};

const MapStateToProps = (state)=> {
    console.log("estado",state)
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