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
import GenericPage from './components/pages/GenericPage'
import CatsPage from './components/pages/CatsPage'

const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/conocenos"
        element={<GenericPage title={'Conócenos'} text={'muffin'} />}
      />
      <Route
        path="/servicios"
        element={<GenericPage title={'Servicios'} text={'jujubes'} />}
      />
      <Route
        path="/galeria"
        element={<GenericPage title={'Galería'} text={'dragee'} />}
      />
      <Route
        path="/contacto"
        element={<GenericPage title={'Contacto'} text={'toffee'} />}
      />
      <Route path="/gatos" element={<CatsPage />} />
    </Route>
  )
)

const App = () => <RouterProvider router={router} />

export default App
