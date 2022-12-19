import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  currentLocation: {
    lat:  55.83679834670928,
    lng:  -4.51081991067973
  },
  restrictedAreas: [
    [-4.510629473227965, 55.837102397341226],
    [-4.51050201827789, 55.83732164269273],
    [-4.509961544752713, 55.837215644061445],
    [-4.510022852197352, 55.837115986965074],
    [-4.510153533855288, 55.836896740453994],
    [-4.510458457724525, 55.83695200518699],
    [-4.510389083511228, 55.83705347465599],
    [-4.510632699935826, 55.83710149136607],
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
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer