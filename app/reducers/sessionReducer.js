const initialState = {
  tokenSession: {},
  sessionId: '',
  sessionPicking:{}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'START_SESSION':
      return { ...state, tokenSession: action.token };
    case 'GET_SESSIONID':
      localStorage.setItem('token' , action.sessionId )
      return { ...state, sessionId: action.sessionId };
    case 'GET_SESSIONPICKING':
      return {...state , sessionPicking:action.session};
    default:
      return state;
  }
};
