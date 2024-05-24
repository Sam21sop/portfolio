import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import NotFound from "./components/ErrorPage/NotFound"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Skills from "./components/Skills/Skills"
import Project from "./components/Projects/Project"


function App() {

  const router = createBrowserRouter([
    {
      path: '/portfolio',
      element: <Navbar />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path:'/portfolio/about',
          element: <About />
        },
        {
          path:'/portfolio/contact',
          element: <Contact />
        },
        {
          path:'/portfolio/skills',
          element:<Skills />
        },
        {
          path:'/portfolio/projects',
          element: <Project />
        }
      ]
    }
  ])

  return (
    <>
      <div >
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
