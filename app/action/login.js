import axios from "axios";

const Login = (auth) => {
    return {
        type: "USER_LOGING",
        auth,
    }
}

const headers = {
    headers:{
        'Content-Type': 'application/json',
        'janis-api-key' : 'Bearer',
        'janis-api-secret' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGRiZTg4NmNkYTk2OGVkYzMwMDgxOCIsImNsaWVudENvZGUiOiJwbGF0YWZvcm1hNS0yMDIwIiwiaXNEZXYiOmZhbHNlLCJleHAiOjE1OTUwMDEwOTYsImlhdCI6MTU5NDgyODI5Nn0.iMIiWM0axLUrZbnhcrbnbHhX_lBLO-gocavequcZw7Y',
    }
}


export const setLogin = (obj) => {
    return dispatch => {
        return axios.post("https://id.janis.in/api/login", obj , headers)
            .then((res) => {
                dispatch(Login(res.data))
            })
    }
}

export const setRecuperarPassword = (obj) =>{
    return axios.post('https://id.janis.in/api/password-recovery', obj)
};