const intialState = {
  totalSessions: 0,
  totalSessionsPending: 0,
  totalSessionsPicked: 0,
  totalSessionsPicking: 0,
  sessionsPending: [],
  sessionsPickedAndPicking: [],
  pickers: [],
  status:'pending',
};

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case "GET_SESSIONS":
      return { ...state, totalSessions: action.totalSessions };
    case "TOTAL_PENDING":
      return { ...state, totalSessionsPending: action.totalSessionsPending };
    case "TOTAL_PICKED":
      return { ...state, totalSessionsPicked: action.totalSessionsPicked };
    case "TOTAL_PICKING":
      return { ...state, totalSessionsPicking: action.totalSessionsPicking };    
    case "GET_PICKERS":
      return { ...state, pickers: action.pickers };
    case "GET_SESSIONS_PENDING":
      return { ...state, sessionsPending: action.sessions, status:'pending'};
    case "GET_SESSIONS_PICKED_&_PICKING":
      return { ...state, sessionsPickedAndPicking: action.sessions, status:'pickedAndPicking'};
    default: return state;
  }
}

    