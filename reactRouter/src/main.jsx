import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//for deployment, in case of React Router, use the Hash Router instead of the Browser Router.
// import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { RouterProvider, createHashRouter, createRoutesFromElements, Route } from 'react-router-dom'

import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github, { githubLoader } from './components/github/Github.jsx'

//create a router METHOD 1
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "/contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

//create a rouyer METHOD 2 ✅
const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path="user" element={<User />} />
      <Route path="user/:userid" element={<User />} />
      <Route
        loader={githubLoader} 
        path="github" 
        element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
