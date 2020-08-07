const initialState = {
  tokenSession: {},
  sessionId: '',
  sessionPicking: {},
  booleano: false,
  statusOrderSelected: 'pending',
  idItems: '',
  despickear: false,
  reiniciar: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'START_SESSION':
      localStorage.setItem('token', action.token.token)
      return { ...state, tokenSession: action.token };
    case 'GET_SESSIONID':
      return { ...state, sessionId: action.sessionId };
    case 'GET_SESSIONPICKING':
      return { ...state, sessionPicking: action.session };
    case 'SET_BOOLEANO':
      return { ...state, booleano: action.booleano }
    case 'SET_TYPE_OF_ORDER_SELECTED':
      return { ...state, statusOrderSelected: action.string }
    case 'IDITEMS':
      return { ...state, idItems: action.id }
    case 'PRODUCTOS':
      return { ...state, sessionPicking: { ...state.sessionPicking, items: action.productos } }
    case 'FINAL_SESSION':
      console.log("entro al finlllll")
      return { ...state, sessionPicking: { ...state.sessionPicking, items: [] } }
    case 'DESPICKEAR_ITEM':
      return { ...state, despickear: action.booleano }
    case 'REINICIAR':
      return { ...state, reiniciar: action.booleano }
    default:
      return state;
  }
};
