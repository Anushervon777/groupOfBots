import './about.css'
import img20 from "./images/icon-boxes.png"
import img21 from "./images/Figures (1).png"
import img22 from "./images/Video.png"
import img23 from "./images/illustration (10).png"
import user from "./images/user.png"
import user2 from "./images/user2.png"
import user3 from "./images/user3.png"
import user4 from "./images/user4.png"
import user5 from "./images/user5.png"
import user6 from "./images/user6.png"
import user7 from "./images/user7.png"
import user8 from "./images/user8.png"
import illusia from "./images/illustration (2).png"
import illusia2 from "./images/illustration (3).png"
export default function About() {
  return <>
    <div className="sect1">
      <div className="s1-text">
        <img src="src/icons/AboutUs.png" alt="" />
        <h1>About Us</h1>
        <p>Our agency has been successfully operating in digital marketing since 2012. We are proud to offer you quality and exemplary service. We help our clients get better results with our creative and data-driven approach to online advertising. </p>
      </div>
      <div className='flex mt-20 gap-10'>
        <div className="flex items-center gap-3">
          <img src="/src/icons/Group (1).png" alt="" />
          <p>SEO Content Strategy</p>
        </div>
        <div className="flex items-center gap-3">
          <img src="/src/icons/ic-speaker.png" alt="" />
          <p>Content Marketing</p>
        </div>
        <div className="flex items-center gap-3">
          <img src="/src/icons/ic-computer.png" alt="" />
          <p>Website & Social Media Marketing</p>
        </div>
      </div>
      <img style={{ width: "1000px", marginTop: "40px" }} src={img20} alt="" />
    </div>

    <div className="stats">
      <img src={img21} alt="" />
    </div>

    <div className='video' style={{width:'1000px',margin:'auto'}}>
      <img src={img22} />
    </div>



    <img src="/src/images/Gallery.png" alt="" style={{ width: "1000px", marginLeft: "200px" }} />

    <div className='proud'>
      <img src={img23} alt="" />
      <div className='box'>
        <h1 style={{ fontSize: "40px" }}>We are proud of our awards</h1>
        <br />
        <div className="in-box">
          <div className="items-center flex w-2/5 mt-3">
            <img src="/src/images/image (17).png" alt="" />
            <p>Top SEO Companies 2020 by Clutch</p>
          </div>
          <div className="items-center flex w-2/5 mt-3">
            <img src="/src/images/image (17).png" alt="" />
            <p>Top SEO Companies 2020 by Clutch</p>
          </div>
          <div className="items-center flex w-2/5 mt-10">
            <img src="/src/images/image (17).png" alt="" />
            <p>Top SEO Companies 2020 by Clutch</p>
          </div>
          <div className="items-center flex w-2/5 mt-10">
            <img src="/src/images/image (17).png" alt="" />
            <p>Top SEO Companies 2020 by Clutch</p>
          </div>
        </div>
      </div>
    </div>

    <form className="blueForm">
      <h1 className="nigger">Get a Free SEO Analysis!</h1>
      <div className='divInputs' style={{ display: "flex", justifyContent: "center", width: "100%", gap: "100px" }}>
        <input type="text" placeholder="Your Name" id="kratos" />
        <input type="text" placeholder="Your Working Email" id="kratos" />
        <input type="text" placeholder="http://yoursite.com" id="kratos" />
        <button className='btnseoAnalysis' >Analyse your site</button>

      </div>
    </form>
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1 style={{ padding: "30px" }}>240+ satisfished clients</h1>
      <img src="/src/images/clients (1).png" alt="" />

    </div>
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Meet our team</h1>
      <div>
        <div style={{ display: "flex", justifyContent: "space-evenly", margin: "50px" }}>
          <div style={{ textAlign: "center" }}>
            <img src={user} alt="" />
            <h4>Courtney Alexander</h4>
            <p>Founder and CEO</p>

          </div>
          <div style={{ textAlign: "center" }}>
            <img src={user2} alt="" />
            <h4>Courtney Alexander</h4>
            <p>Founder and CEO</p>

          </div>
          <div style={{ textAlign: "center" }}>
            <img src={user3} alt="" />
            <h4>Courtney Alexander</h4>
            <p>Founder and CEO</p>

          </div>
          <div style={{ textAlign: "center" }}>
            <img src={user4} alt="" />
            <h4>Courtney Alexander</h4>
            <p>Founder and CEO</p>

          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly", margin: "50px" }}>
          <div style={{ textAlign: "center" }}>
            <img src={user5} alt="" />
            <h4>Courtney Alexander</h4>
            <p>Founder and CEO</p>

          </div>
          <div style={{ textAlign: "center" }}>
            <img src={user6} alt="" />
            <h4>Courtney Alexander</h4>
            <p>Founder and CEO</p>

          </div>
          <div style={{ textAlign: "center" }}>
            <img src={user7} alt="" />
            <h4>Courtney Alexander</h4>
            <p>Founder and CEO</p>

          </div>
          <div style={{ textAlign: "center" }}>
            <img src={user8} alt="" />
            <h4>Courtney Alexander</h4>
            <p>Founder and CEO</p>

          </div>
        </div>
      </div>
    </div>
    <div className='illu'>
      <div>
        <h1>Freequently Ask Questions</h1>
        <h3>-Aliquet lectus urna viverra in odio?</h3>
        <p style={{ lineHeight: "20px" }}>Adipiscing nunc arcu enim elit mattis eu placerat proin. <br /> Imperdiet elementum faucibus dignissim purus. <br /> Fusce  parturient diam magna ullamcorper morbi semper massa ac facilisis.</p>
        <h3>+Orci commodo, viverra orci mollis ut euismod?</h3>
        <h3>+Orci commodo, viverra orci mollis ut euismod?</h3>
        <h3>+Orci commodo, viverra orci mollis ut euismod?</h3>
        <button >Discover more</button>
      </div>
      <img src={illusia} alt="" />
    </div>
    <div style={{ display: "flex", justifyContent: "center", gap: "40px", alignItems: "center" }}>
      <img src={illusia2} alt="" />
      <div style={{ width: "400px", lineHeight: "30px" }}>
        <h1>Careers at Createx Agency</h1>
        <p>Ready to join us on our mission to deliver the best sales development services to businesses around the globe? We’re hiring!</p>
        <button className='btnSeeCarer'>See careers</button>
      </div>
    </div>
  </>
}