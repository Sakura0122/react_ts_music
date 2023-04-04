import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, TypedUseSelectorHook, useSelector, shallowEqual } from 'react-redux'
import recommendReducer from '@/store/modules/recommend'
import playerReducer from '@/store/modules/player'

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
    player: playerReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const shallowEqualApp = shallowEqual
export default store
