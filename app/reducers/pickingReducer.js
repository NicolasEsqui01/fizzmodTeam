const inicialState = {
  ItemsPicked: [],
  ItemsBySearch:[],
  ItemsParaSustituir:[],
};

export default (state = inicialState, action) => {
  switch (action.type) {
    case 'ITEM_PICKED':
      return { ...state, ItemsPicked: [...state.ItemsPicked, action.items] };
    case 'FINAL':
      return { ...state, ItemsPicked: [] };
    case 'DESPICKED':
      return { ...state, ItemsPicked: [...state.ItemsPicked, action.items] };
    case 'LIST_ITEMS_SEARCHED':
      return { ...state, ItemsPicked: [...state.ItemsBySearch, action.items] };
    case 'SUSTITUIR':
      return { ...state, ItemsParaSustituir: [...action.items]};  
    default:
      return state;
  }
};

