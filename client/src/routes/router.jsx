import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import HomePage from '../pages/HomePage'
import CovenPage from '../pages/CovenPage'
import LoginPage from '../pages/LoginPage'
import ErrorPage from '../pages/ErrorPage'
import AccountPage from '../pages/AccountPage'
import MusicPage from '../pages/MusicPage'
import ShowsPage from '../pages/ShowsPage'
import StorePage from '../pages/StorePage'
import VideosPage from '../pages/VideosPage'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />
      }, {
        path: '/music',
        element: <MusicPage />
      }, {
        path: '/store',
        element: <StorePage />
      }, {
        path: '/videos',
        element: <VideosPage />
      }, {
        path: '/shows', 
        element: <ShowsPage />
      }, {
        path: '/coven',
        element: <CovenPage />
      }, {
        path: '/login',
        element: <LoginPage />
      }, {
        path: '/account',
        element: <AccountPage />
      }
    ]
  }
])