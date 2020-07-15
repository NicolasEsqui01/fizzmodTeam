const initialState = {
    user: {},
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "USER_LOGING":
            return { ...state, user: action.userLoger }
        default: return state
    }
}