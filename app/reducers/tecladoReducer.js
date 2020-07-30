const initialState = {
  input: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_INPUT':
      return { ...state, input: action.input };
    default:
      return state;
  }
}
