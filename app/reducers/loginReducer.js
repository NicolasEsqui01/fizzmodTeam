const initialState = {
  token: {},
  datos: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGING':
      localStorage.setItem('auth', action.token.auth);
      return { ...state, token: action.token };
    case 'DATA_USER':
      return { ...state, datos: action.datos };
    default:
      return state;
  }
};
