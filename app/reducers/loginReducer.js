const initialState = {
    token: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "USER_LOGING":
            localStorage.setItem('token', action.token.auth)
            return { ...state, token: action.token}
        default: return state
    }
}