// authSlice is where we put reducer function login, to manage state and to dispatch it to store
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authService from '../auth/authService'

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

// Register user
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return authService.register(user)
    } catch (err) {
        const message = (err.response && err.response.data && err.response.data?.data?.msg) || err.message || err.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const initialState = {
    user: user || null,
    isError: false,
    isSucccess: false,
    message: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSucccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(register.pending, state => {
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSucccess = true
            state.user = action.payload
        })
        .addCase(register.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer