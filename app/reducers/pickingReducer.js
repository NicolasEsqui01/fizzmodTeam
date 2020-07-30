const inicialState = {
  ItemsPicked: {},
};

export default (state = inicialState, action) => {
  switch (action.type) {
    case 'ITEM_PICKED':
      return { ...state, ItemsPicked: action.items };
    default:
      return state;
  }
};

