import React, { useState ,useEffect} from 'react'
import "../CSS/ContactUs.css"
import Logo from "../Images/logo.jpeg"
import Swal from 'sweetalert2'
import { FaBackward } from 'react-icons/fa6'

const AboutUs = () => {

const handleLocation =()=>{
    window.history.back()
}

  return (
    <div className='ContactUsWrap'>
        <div className='ContactUs'>
            <div className='ContactUsHeader'>
                <h1>About Us</h1>
            </div>
        <div className='ContactUsBody'>
                
                <div className='ContactUsBodyLeft' style={{padding:"5%"}}>
                    <p>
                    At <strong style={{color:"blue"}}>Digital Premium Tech,</strong> we're not just a tech company; we're your dedicated partners in digital innovation. With a passion for excellence and a commitment to exceeding expectations, we offer a comprehensive suite of services to empower businesses in the ever-evolving digital landscape.
<br/><br/>
<span style={{fontWeight:"bold", color:"blue"}}>Our Mission:</span><br/>

Our mission is simple: to transform your digital vision into reality. Whether you're a startup striving to make your mark or an established enterprise seeking to innovate, we're here to guide you every step of the way. We believe in harnessing the power of technology to drive meaningful change and create unparalleled user experiences.

<br/><br/>
<span style={{fontWeight:"bold",color:"blue"}}>Why Choose Us?</span><br/>


Collaborative Approach: We believe in fostering strong, collaborative partnerships with our clients, working closely with you to understand your goals and tailor solutions that align with your vision.
<br/>Innovation: Innovation is at the core of our DNA. We're constantly pushing the boundaries of technology to deliver cutting-edge solutions that drive tangible results and set you apart from the competition.
<br/>Client-Centric Focus: Your satisfaction is our top priority. We pride ourselves on delivering exceptional service and support, ensuring that your experience with us is nothing short of outstanding.

<br/><br/>
<span style={{fontWeight:"bold", color:"blue"}}>Get in Touch</span>
<br/>
Ready to take your digital presence to the next level? Let's embark on this journey together. Contact us today to learn more about how [Your Company Name] can help you achieve your goals and elevate your brand in the digital realm.
<br/><br/>
At <strong style={{color:"blue"}}>Digital Premium Tech,</strong> we don't just build websites—we build relationships, innovation, and success stories. Welcome to the future of digital excellence.
                    </p>

                    {/* empty div for space */}
                    <div style={{width:"100%",height:"20vh"}}></div>
                </div>
                <div className='ContactUsBodyRight'>
                    <img src={Logo} alt="Contact us"/>

                    {/* empty div for space */}
                    <div style={{width:"100%",height:"40vh"}}></div>
                </div>
        </div>
        <div className='SubmitButtonWrap' style={{justifyContent:"center",alignItems:"center"}}>
                    <button 
                    onClick={handleLocation}
                    style={{height:"5vh",width:"10vw",display:"flex",justifyContent:"center",gap:"5%",alignItems:"center"}}><FaBackward/> Back</button>
                </div></div>
    </div>
  )
}

export default AboutUs
