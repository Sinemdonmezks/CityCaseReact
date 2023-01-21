import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import cityService from '../../config/CityService'
const initialStateCity = {
    
    city: {},
    cityList: [],
    cityId: null,
    isUpdated: false,
    isCreated: false,
    error: {
      code: '',
      message: '',
      fields: [],
    },
  }
  export const create = createAsyncThunk(
    'city/create',
  
    async (payload) => {
      try {
        const response = await fetch(cityService.create, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
          .then((response) => response.json())
          .catch((error) => console.log(error))
        return response
      } catch (err) {
        return err.response
      }
    },
  )
  
  export const findbyid = createAsyncThunk('city/findbyid', async (payload) => {
    try {
      console.log(payload)
      const response = await axios.get(cityService.findbyid + payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
  
      return response.data
    } catch (error) {
      return error.response.data
    }
  })
  export const findbyname = createAsyncThunk('city/findbyname', async (payload) => {
    try {
      console.log(payload)
      const response = await axios.get(cityService.findbyname + payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
  
      return response.data
    } catch (error) {
      return error.response.data
    }
  })
  export const getAllCity= createAsyncThunk('cityList/findall', async () => {
    const result = await fetch(cityService.findall)
      .then((response) => response.json())
      .then((data) => data)
  
    return result
  })
  export const deleteCity = createAsyncThunk('city/delete', async (payload) => {
    try {
      const response = await fetch(cityService.delete + payload, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .catch((error) => console.log(error))
      return response
    } catch (err) {
      return err.response
    }
  })
  
  
  const citySlice = createSlice({
    name: 'city',
    initialState: initialStateCity,
  
    reducers: {
    
    },
    extraReducers: (build) => {
      //create
        build.addCase(create.fulfilled, (state, action) => {
            state.city = action.payload
            alert('City created')
        })
        build.addCase(create.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
          })
          build.addCase(create.pending, (state, action) => {
            state.isLoading = true
          })
      //findbyid
        build.addCase(findbyid.fulfilled, (state, action) => {
            if(action.payload === null){
              alert('City not found')
            }else if(action.payload >= state.city.id){
              alert('City not found')
            }
            else{state.city = action.payload
            }
        })
        build.addCase(findbyid.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
            alert('City not found')
          })
          build.addCase(findbyid.pending, (state, action) => {
            state.isLoading = true
          })
          //findbyname
          build.addCase(findbyname.fulfilled, (state, action) => {
            if(action.payload.length === 0){
              alert('City not found')
            }else if(action.payload === null){
              alert('City not found')
            }else{state.cityList = action.payload
              }
          })
          build.addCase(findbyname.rejected, (state, action) => {
              state.error = action.payload
              state.isLoading = false
            })
            build.addCase(findbyname.pending, (state, action) => {
              state.isLoading = true
              
            })
          //getAll
        build.addCase(getAllCity.fulfilled, (state, action) => {
            state.cityList = action.payload
        })
        build.addCase(getAllCity.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
          })
          build.addCase(getAllCity.pending, (state, action) => {
            state.isLoading = true
          })
          //delete
          build.addCase(deleteCity.pending, (state) => {
            state.isLoading = true
          })
          build.addCase(deleteCity.fulfilled, (state, action) => {
            console.log('Extra Reducer', action.payload)
            state.isLoading = false
            if (state.isUpdated === false) {
              state.isUpdated = true
            } else {
              state.isUpdated = false
            }
          })
          build.addCase(deleteCity.rejected, (state) => {
            state.isLoading = false
          })
    },
})


export default citySlice.reducer
