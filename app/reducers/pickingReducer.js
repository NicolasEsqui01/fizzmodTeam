const inicialState = {
    ItemsPicked:{}
};

export default (state = inicialState , action) => {
	console.log("action.items",action.items)
    switch(action.type){
        case "ITEM_PICKED" : 
            return {...state , ItemsPicked:action.items}
        default :
            return state
    }
};