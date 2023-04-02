import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { Banner, HotRecommend, newAlbum } from '@/types/recommend'
import { getBanners, getHotRecommend, getNewAlbums } from '@/service/recommend'

interface IRecommendState {
  banners: Banner[]
  hotRecommends: HotRecommend[]
  newAlbums: newAlbum[]
}

const initialState: IRecommendState = {
  // 轮播图
  banners: [],
  // 热门推荐
  hotRecommends: [],
  // 新碟上架
  newAlbums: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendsAction(state, { payload }) {
      state.hotRecommends = payload
    },
    changeNewAlbumsAction(state, { payload }) {
      state.newAlbums = payload
    }
  }
})

export const fetchRecommendDataAction = createAsyncThunk('fetchData', (_, { dispatch }) => {
  getBanners().then((res) => {
    dispatch(changeBannersAction(res.data.banners))
  })
  getHotRecommend(8).then((res) => {
    dispatch(changeHotRecommendsAction(res.data.result))
  })
  getNewAlbums().then((res) => {
    dispatch(changeNewAlbumsAction(res.data.albums))
  })
})

// export const fetchBannerDataAction = createAsyncThunk('banners', async (arg, thunkAPI) => {
//   const res = await getBanners()
//   thunkAPI.dispatch(changeBannersAction(res.data.banners))
// })
//
// export const fetchHotRecommendAction = createAsyncThunk('hotRecommends', async (arg, thunkAPI) => {
//   const res = await getHotRecommend(8)
//   thunkAPI.dispatch(changeHotRecommendsAction(res.data.result))
// })
//
// export const fetchNewAlbumAction = createAsyncThunk('newAlbums', async (arg, thunkAPI) => {
//   const res = await getNewAlbums()
//   thunkAPI.dispatch(changeNewAlbumsAction(res.data.albums))
// })

export const { changeBannersAction, changeHotRecommendsAction, changeNewAlbumsAction } = recommendSlice.actions
export default recommendSlice.reducer
