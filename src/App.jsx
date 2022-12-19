import { useState } from 'react'
import InputArea from './components/InputArea'
import MapArea from './components/MapAreaComponent'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './store/counterSlice'
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import MapPage from "./pages/MapPage";

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="map-page" element={<MapPage />} />

          </Route>
        </Routes>
      </main>

    </BrowserRouter>
  )
}

export default App
