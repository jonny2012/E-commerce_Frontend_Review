import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
interface ITypes {
  id: number,
  name: string
}

interface TypesState {
  types: ITypes[],
  isLoading: boolean,
  isSuccess: boolean,
  isError: boolean,
  message: string

}

const initialState: TypesState = {
  types: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",

}


const API_URL = "http://localhost:5000/api/type"

export const getTypes = createAsyncThunk(
  'register',
  async (_, thunkApi) => {
    try {
      const response = await axios.get(API_URL);
      console.log(response.data)
      return response.data;
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkApi.rejectWithValue({ message })
    }
  }
);

export const userSlice = createSlice({
  name: 'type',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTypes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTypes.fulfilled, (state, action: PayloadAction<ITypes[]>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.types = action.payload
      })
      .addCase(getTypes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  }




})
export default userSlice.reducer;