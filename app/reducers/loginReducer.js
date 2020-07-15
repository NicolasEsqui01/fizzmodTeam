const initialState = {
    auth: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "USER_LOGING":
            return { ...state, auth: action.auth }
        default: return state
    }
}