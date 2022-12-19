import axios from 'axios'

const API_URL = '/api/users/v1/'

// Auth service is like a controller in frontend side, to put any axios request and handling them
// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)
    console.log(response)

    if(response.data?.data) {
        localStorage.setItem('user', JSON.stringify(response.data?.data))
    }

    return response.data?.data
}

const logout = async () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout
}
export default authService