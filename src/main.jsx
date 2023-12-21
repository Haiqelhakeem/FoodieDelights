import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import LoginPage from './pages/LoginPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ExplorePage from './pages/ExplorePage.jsx'
import RegisterPage from './pages/RegisterPage.jsx' 
import ArticleListPage from './pages/ArticleListPage.jsx'
import CreatePlacePage from './pages/CreatePlacePage.jsx'
import PlaceDetailPage from './pages/PlaceDetailPage.jsx'
import UpdatePlacePage from './pages/UpdatePlacePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/explore',
    element: <ExplorePage />,
  },
  {
    path: '/create-place',
    element: <CreatePlacePage />,
  },
  {
    path: '/article',
    element: <ArticleListPage />,
  },
  {
    path: '/places/:id', // Update the route to include the place ID
    element: <PlaceDetailPage />,
  },
  {
    path: '/places/:id/edit', // Update the route to include the place ID
    element: <UpdatePlacePage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
