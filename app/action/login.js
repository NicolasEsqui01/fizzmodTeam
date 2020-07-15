import axios from "axios";

const Login = (userLoger) => {
    return {
        type: "USER_LOGING",
        userLoger,
    }
}

export const setLogin = (obj) => {
    return dispatch => {
        return axios.post("https://id.janisdev.in/api/login", obj)
            .then((user) => dispatch(Login(user)))
    }
} 