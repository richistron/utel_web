import React from 'react'
import './App.css'
import {
  RouterProvider,
  createHashRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom'
import Layout from './Layout'
import HomePage from './components/pages/HomePage'

const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<h2>About</h2>} />
    </Route>
  )
)

const App = () => <RouterProvider router={router} />

export default App
