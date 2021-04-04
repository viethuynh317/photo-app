import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (_, {dispatch}) => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/comments');

      const comments = await res.data;
      return comments;
    } catch (error) {
      console.log(error);
    }
 
  }
);

const commentsAdapter = createEntityAdapter({
  selectId: comment => comment.id
});


const commentsSlice = createSlice({
  name: 'comments',
  initialState: commentsAdapter.getInitialState({
    loading: false
  }),
  reducers: {},
  extraReducers: {
    [fetchComments.pending]: (state) => {
      state.loading = true;
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.loading = false;
      commentsAdapter.setAll(state, action.payload);
    },
    [fetchComments.rejected]: (state) => {
      state.loading = false;
      
    }
  },
});

export const commentsSelector = commentsAdapter.getSelectors(state => state.comments);


const {actions , reducer: commentsReducer} = commentsSlice;

export const {} = actions;

export default commentsReducer;