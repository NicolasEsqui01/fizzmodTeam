const inicialState = {
  numero: 0,
};

export default (state = inicialState, action) => {
  switch (action.type) {
    case 'ACTIVATION':
      return { ...state, numero: action.numero };
    case 'DESACTIVATION':
      return { ...state, numero: action.numero };
    default:
      return state;
  }
};
