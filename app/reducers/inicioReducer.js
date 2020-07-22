const intialState = {
  sessions: [],
  pickers: [],
  permiso: false,
  status:'pending',
};


export default function reducer(state = intialState, action) {
  switch (action.type) {
    case "GET_SESSIONS":
      return { ...state, sessions: action.sessions };
    case "GET_PICKERS":
      return { ...state, pickers: action.pickers };
    case "GET_PERMISO":
      return { ...state, permiso: action.permiso };
    case "SET_STATUS":
      return { ...state, status: action.status };
    case "SET_STATUS2":
      return { ...state, status: action.status };
    default: return state;
  }
}