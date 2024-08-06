import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import LogIn from './components/logIn/LogIn'
import User from './pages/User'
import VideoPage from './pages/VideoPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogIn />
      },
      {
        path: "/user",
        element: <User />
      },
      {
        path: "/video",
        element: <VideoPage />
      }
    ] 
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
