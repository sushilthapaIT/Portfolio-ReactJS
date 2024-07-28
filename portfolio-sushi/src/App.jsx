import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Home from './content/Home'
import About from './content/About'
import Contact from './content/Contact'

function App() {

  const router = createBrowserRouter([
    {
      path: "/home",
      element: <><Navbar/> <Home/></>
    },
    {
      path: "/about",
      element: <><Navbar/> <About/></>
    },
    {
      path: "/contact",
      element: <><Navbar/> <Contact/></>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
