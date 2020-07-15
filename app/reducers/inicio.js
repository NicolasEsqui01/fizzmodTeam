const intialState = {
  session: {}
};

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case GET_SESSION:
      return { ...state, session: action.list };
    default: return state;
  }
}
