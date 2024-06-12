import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66674d85a2f8516ff7a712fa.mockapi.io/api/";

export const getCampers = createAsyncThunk(
  "campers/getCampers",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts/?page=${page}&limit=${4}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
