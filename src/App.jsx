import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import Layout from "./layout/layout"
import Home from "./pages/home/home"
import Service from "./pages/service/service"
import Services from "./pages/services/services"
import About from "./pages/about/about"
import CaseStudy from "./pages/caseStudy/case"
import CaseStudies from "./pages/caseStudies/caseStudies"
import Blog from "./pages/blog/blog"
import Careers from "./pages/careers/careers"
export default function App(){
  const router = createBrowserRouter([
    {path:"/",element:<Layout/> ,children:[
      {path:"/home",element:<Home/>},
      {path:"/service",element:<Service/>},
      {path:"/services",element:<Services/>},
      {path:"/about", element:<About/>},
      {path:"/caseStudy",element:<CaseStudy/>},
      {path:"/caseStudies",element:<CaseStudies/>},
      {path:"/blog", element:<Blog/>},
      {path:"/careers",element:<Careers/>},
<<<<<<< HEAD
      
=======
        
>>>>>>> b85259009ee3bf2ef826030db482622de58956b9
    ]}
  ])
  return <>
    <RouterProvider router={router} />
  </>
}