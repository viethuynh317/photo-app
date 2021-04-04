import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import infosApi from "../../api/infosApi";
import photoApi from "../../api/photoApi";

export const fetchInfo = createAsyncThunk(
  'info/fetchInfo',
  async () => {
    const res = await photoApi.getAllInfo();
    return res;
  }
)


const infoSlice = createSlice({
  name: 'info',
  initialState: {
    infos: [],
    loading: false,
    error: ''
  },
  reducers: {
    addInfo(state, action) {

    }
  },
  extraReducers: {
    [fetchInfo.pending](state) {
      state.loading = true;
    },
    [fetchInfo.fulfilled](state, action) {
      state.loading = false;
      state.infos = action.payload; 
    },
    [fetchInfo.rejected](state) {
      state.loading = false;
      state.error = 'Call API failed'
    }
  }
});

const {reducer: infoReducer, actions} = infoSlice;

export const {addInfo} = actions;

export default infoReducer;