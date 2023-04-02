import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Banners } from '@/types/recommend'
import { getBanner } from '@/service/recommend'

export const fetchBannerDataAction = createAsyncThunk('banners', async (arg, thunkAPI) => {
  const res = await getBanner()
  thunkAPI.dispatch(changeBannersAction(res.data.banners))
})

const initialState: Banners = {
  banners: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    }
  }
  // extraReducers: (builder) => {
  //   builder.addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
  //     state.banners = payload
  //   })
  // }
})

export const { changeBannersAction } = recommendSlice.actions
export default recommendSlice.reducer
