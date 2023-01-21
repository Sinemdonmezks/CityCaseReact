import { configureStore } from '@reduxjs/toolkit'
import { CitySlice} from './features'

const store = configureStore({
  reducer: {
    city: CitySlice,
  },
})
export default store
