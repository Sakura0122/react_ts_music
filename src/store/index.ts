import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import { useDispatch, TypedUseSelectorHook, useSelector, shallowEqual } from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const shallowEqualApp = shallowEqual
export default store
