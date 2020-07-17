const intialState = {
  sessions: [],
  pickers: []
}

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case "GET_SESSIONS":
      return { ...state, sessions: action.sessions };
    case "GET_PICKERS":
      return { ...state, pickers: action.pickers };
    default: return state;
  }
}