import './App.css';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './content/Home';
import About from './content/About';
import Contact from './content/Contact';
import Projects from './content/Projects';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /> <Home /></>
    },
    {
      path: "/about",
      element: <><Navbar /> <About /></>
    },
    {
      path: "/contact",
      element: <><Navbar /> <Contact /></>
    },
    {
      path: "/projects",
      element: <><Navbar/> <Projects/></>
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
