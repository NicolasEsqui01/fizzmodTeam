const initialState = {
  tokenSession: '',
  sessionId: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'START_SESSION':
      return { ...state, tokenSession: action.token };
    case 'GET_SESSIONID':
      return { ...state, sessionId: action.sessionId };
    default:
      return state;
  }
};
