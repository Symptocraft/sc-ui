import UserData from "../types/userData.type"

const getUserData = () => {
    const userData:UserData = {
        token: localStorage.getItem('userToken') || '',
        name: localStorage.getItem('userName') || '',
        email: localStorage.getItem('userEmail') || '',
        username: localStorage.getItem('userUsername') || ''
    }
    return userData
}

const setUserData = (userData:UserData) => {
    localStorage.setItem('userToken', userData.token)
    localStorage.setItem('userName', userData.name)
    localStorage.setItem('userEmail', userData.email)
    localStorage.setItem('userUsername', userData.username)
}

const clearUserData = () => {
    localStorage.removeItem('userToken')
    localStorage.removeItem('userName')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userUsername')
}

export {
    getUserData,
    setUserData,
    clearUserData
}