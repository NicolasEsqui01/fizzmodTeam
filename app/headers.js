export const headers = () => {
    return {
        headers:{
            'Content-Type': 'application/json',
            'janis-api-key': 'Bearer',
            'janis-client': 'plataforma5-2020',
            'x-janis-page': 3,
            'janis-api-secret': localStorage.getItem('auth')
        }
    }
}

export const headersToPickers = () => {
    return {
        headers:{
            'Content-Type': 'application/json',
            'janis-api-key': 'Bearer',
            'janis-client': 'plataforma5-2020',
            'janis-api-secret': localStorage.getItem('auth')
        }
    }
}
