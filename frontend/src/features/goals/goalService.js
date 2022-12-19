import axios from 'axios'

const API_URL = '/api/goals/v1/'

// Auth service is like a controller in frontend side, to put any axios request and handling them
// Register user
const createGoal = async (text, token) => {
    const user = localStorage.getItem('user')
    const response = await axios.post(API_URL, {
        text: text,
        user: user._id
    }, {headers: {
        Authorization: `Bearer ${token}`
    }})

    return response.data?.data
}

const goalService = {
    createGoal
}

export default goalService