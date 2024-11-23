import { Link, Outlet } from "react-router-dom";
import Service from "../pages/service/service";
import CaseStudies from "../pages/caseStudies/caseStudies";
import About from "../pages/about/about";
import Blog from "../pages/blog/blog";
import Careers from "../pages/careers/careers";
import "./layout.css"

export default function Layout(){
  return <>
    <div className="navbar">
        <div className="menu">
          <Link to={"/home"}><img src="/public/logo.png" alt="" /></Link>
          <Link to={"/service"} >service</Link>
          <Link to={"/caseStudies"}>Case Studies</Link>
          <Link to={"/caseStudy"}>Case Study</Link>
          <Link to={"/about"}>About us</Link>
          <Link to={"/blog"}>blog</Link>
        </div>
        <button className="btnTalk">Talk to human</button>
    </div>
    <Outlet/>
    <div className="footer">
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <div className="boxFooter1">
          <img src="/public/logo.png" alt="" />
          <p>Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.</p>
          <img src="/public/socials (1).png" alt="" />
        </div>
        <div className="company">
          <h1>COMPANY</h1>
          <p>About Us</p>
          <p>Case Studies</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Contacts</p>
        </div>
        <div className="company">
          <h1>SERVICES</h1>
          <p>Social Media</p>
          <p>SEO</p>
          <p>Research</p>
          <p>Content & PR</p>
          <p>Payed Traffic</p>
        </div>
        <div className="company">
          <h1>CONTACT US</h1>
          <p>(405) 555-0128</p>
          <p>hello@createx.com</p>

        </div>
        <div className="company">
          <h1>SIGN UP TO OUR NEWSLETTER</h1>
          <input type="text" name="" id="" />
          <p>*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</p>

        </div>
      </div>
      <div>
        <img src="/public/awards (1).png" style={{marginTop:"50px"}} alt="" />
      </div>
    </div>
  </>
}