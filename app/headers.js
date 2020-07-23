export const headers = () => {
    return {
        headers:{
            'Content-Type': 'application/json',
            'janis-api-key': 'Bearer',
            'janis-client': 'plataforma5-2020',
            'janis-api-secret': localStorage.getItem('token'),
            'x-janis-page':2,
        }
    }
}
