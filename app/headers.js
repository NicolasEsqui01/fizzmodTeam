export const headers = () => {
    return {
        headers:{
            'Content-Type': 'application/json',
            'janis-api-key': 'Bearer',
            'janis-client': 'plataforma5-2020',
            'x-janis-page': 2,
            'janis-api-secret': localStorage.getItem('token')
        }
    }
}

export const headersToPickers = () => {
    return {
        headers:{
            'Content-Type': 'application/json',
            'janis-api-key': 'Bearer',
            'janis-client': 'plataforma5-2020',
            'janis-api-secret': localStorage.getItem('token')
        }
    }
}
