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

const deleteGoal = async (id, token) => {
    const response = await axios.delete(API_URL + id, {headers: {
        Authorization: `Bearer ${token}`
    }})
    return response.data?.data
}

const getGoals = async (token) => {
    const response = await axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response.data?.data
}

const goalService = {
    createGoal,
    getGoals,
    deleteGoal
}

export default goalService