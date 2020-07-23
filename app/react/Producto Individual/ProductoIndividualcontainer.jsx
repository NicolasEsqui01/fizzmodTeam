import React , {useEffect , useState} from "react";
import { connect } from "react-redux";
import ProductoIndividual from "./ProductoIndividual";
import { itemPicked } from '../../action/picking';
import { getSessionPicking } from '../../action/session'
import history from '../../utils/history'

const ProductoIndividualcontainer = ({items , idSession , getSessionPicking , sendItemPicked , token})=> {

    const [indice , setIndice] = useState(0)

    useEffect(() =>{
        getSessionPicking(idSession);
    },[indice]);


	const ItemPicked = (iditems , qty )=>{
        const data = {
          "token":`${token}`,
          "items":[{
            "id": iditems, 
            "pickedQuantity": qty,
          }]
        };
		sendItemPicked(idSession, data).then(() =>{
            if( ( indice + 1 ) < items.length ){
                return setIndice(indice + 1)
            }else{
                return history.push('/inicio')
            }
        });
	}

    return (
        <>
        <ProductoIndividual session={items} pickeado={ItemPicked} indice={indice}/>
        {this.props.children}
        </>
    )
};

const MapStateToProps = (state)=> {
    return {
        idSession:state.sessionReducer.sessionId, // id de la sesssion
        token:state.sessionReducer.tokenSession.token, // token de la session cuando inicia el picking
        items:state.sessionReducer.sessionPicking.items // los items de la session
    }
};

const MapDispatchToProps = (dispatch)=> {
    return {
        sendItemPicked: (id, obj) => dispatch(itemPicked(id,obj)),
        getSessionPicking : (id) => dispatch(getSessionPicking(id))
    }
};

export default connect (MapStateToProps, MapDispatchToProps)(ProductoIndividualcontainer)