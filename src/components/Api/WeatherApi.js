import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// const fetchUserById = createAsyncThunk(
//     'users/fetchById',
//     async (userId, { signal }) => {
//         const source = axios.CancelToken.source()
//         signal.addEventListener('abort', () => {
//             source.cancel()
//         })
//         const response = await axios.get(`https://reqres.in/api/users/${userId}`, {
//             cancelToken: source.token,
//         })
//         return response.data
//     }
// )


