import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api'


export const getIngredients = createAsyncThunk('getIngredients', async () => {
  try {
    const res = await api.getData()
    console.log(res)
    return res.data
  } catch (error) {
    throw new Error(error)
  }
})

export const sendOrder = createAsyncThunk('sendOrder', async (orderList) => {
  try {
    const res = await api.sendData(orderList)
    console.log(res)
    return res
  } catch (error) {
    throw new Error(error)
  }
})
