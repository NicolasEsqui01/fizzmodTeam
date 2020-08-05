const inicialState = {
  ItemsPicked: [],
};

export default (state = inicialState, action) => {
  switch (action.type) {
    case 'ITEM_PICKED':
      return { ...state, ItemsPicked: [...state.ItemsPicked, action.items] };
    case 'FINAL':
      return { ...state, ItemsPicked: [] };
    case 'DESPICKED':
      return { ...state, ItemsPicked: [...state.ItemsPicked, action.items] };
    default:
      return state;
  }
};

