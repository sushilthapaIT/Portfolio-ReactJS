import './App.css';
import Navbar from './components/Navbar';
import { counterContext } from './context/context';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './content/Home';
import About from './content/About';
import Contact from './content/Contact';
import Projects from './content/Projects';
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/projects",
    element: (
      <>
        <Navbar />
        <Projects />
        <Footer />
      </>
    ),
  },
]);

function App() {
  return (
    <counterContext.Provider value={{ }}>
      <RouterProvider router={router} />
    </counterContext.Provider>
  );
}

export default App;