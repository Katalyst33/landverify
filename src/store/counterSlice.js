import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  currentLocation: {
    lat: 55.83679834670928,
    lng: -4.51081991067973
  },
  restrictedAreas: [
  
  ] ,
  
  myArea: [
  
  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },

    setCurrentLocation: (state, action) => {
      state.currentLocation.lat = action.payload.latitude
      state.currentLocation.lng = action.payload.longitude
    },


    addRestrictedArea: (state, action) => {
      console.log("addRestrictedArea ???", action.payload)

      // state.restrictedAreas.push(action.payload)
      // state.restrictedAreas =  action.payload


      // update the state with the new restricted area

      state.restrictedAreas =  action.payload
    }





  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount ,setCurrentLocation,addRestrictedArea } = counterSlice.actions

export default counterSlice.reducer