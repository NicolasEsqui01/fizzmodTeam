const intialState = {
  sessions: []

};

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case "GET_SESSIONS":
      return { ...state, sessions: action.sessions };

    default: return state;
  }
}
