import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api'

export const getIngredients = createAsyncThunk('getIngredients', async () => {
    const res = await api.getData()
    return res.data
})

export const sendOrder = createAsyncThunk('sendOrder', async (orderList) => {
    const res = await api.sendData(orderList)
    return res
})
