import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import LoginPage from './pages/LoginPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ExplorePage from './pages/ExplorePage.jsx'
import RegisterPage from './pages/RegisterPage.jsx' 
import ArticlePage from './pages/ArticlePage.jsx'
import ArticleListPage from './pages/ArticleListPage.jsx'

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
    path: '/article',
    element: <ArticleListPage />,
  },
  {
    path: '/article/detail',
    element: <ArticlePage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
