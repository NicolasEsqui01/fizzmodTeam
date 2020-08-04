export const headers = () => {
    return {
        headers:{
            'Content-Type': 'application/json',
            'janis-api-key': 'Bearer',
            'janis-client': 'plataforma5-2020',
            'x-janis-page': 3,  //serán 60 ordenes de la página 3
            'janis-api-secret': localStorage.getItem('auth')
        }
    }
}

export const headers2 = () => {
    return {
        headers:{
            'Content-Type': 'application/json',
            'janis-api-key': 'Bearer',
            'janis-client': 'plataforma5-2020',
            'x-janis-page-size': 10,  //limita la renderizacion a 10 ordenes
            'janis-api-secret': localStorage.getItem('auth')
        }
    }
}

export const headersTotal = () => {
    return {
        headers:{
            'Content-Type': 'application/json',
            'janis-api-key': 'Bearer',
            'janis-client': 'plataforma5-2020',
            'janis-api-secret': localStorage.getItem('auth')
        }
    }
}

