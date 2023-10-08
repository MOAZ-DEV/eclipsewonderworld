import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/HomePage.tsx'
import { YouAreLost } from './pages/YouAreLost.tsx'
import { EclipseTypesPage } from './pages/EclipseTypesPage.tsx'
import { ResorcesPage } from './pages/ResorcesPage.tsx'
import { AboutEclipsesPage } from './pages/AboutEclipsesPage.tsx'
import { MatchingGame } from './games/MatchingGame/Game.tsx'

const router = createBrowserRouter([{
  path: "/eclipsewonderworld/",
  element: <App />,
  children: [
    {      path: "/eclipsewonderworld/*", element: <YouAreLost />},
    {      path: "/eclipsewonderworld/", element: <HomePage />},
    {      path: "/eclipsewonderworld/home", element: <HomePage />},
    {      path: "/eclipsewonderworld/about_eclipses_page", element: <AboutEclipsesPage />},
    {      path: "/eclipsewonderworld/eclipse_types", element: <EclipseTypesPage />},
    {      path: "/eclipsewonderworld/resorces", element: <ResorcesPage />},
    {      path: "/eclipsewonderworld/game/eclipse_matching", element: <MatchingGame />},
  ]
}])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <RouterProvider router={router}/>

  </React.StrictMode>,
)
