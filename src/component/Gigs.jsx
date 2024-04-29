import React, { useContext } from 'react'
// import "../CSS/Gigs.css"
import "../CSS2/Gigs2.css"
import Footer from "../component/Footer"
// import {FaHome} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import {FaAssistiveListeningSystems, FaBalanceScale, FaBeer, FaCreativeCommonsZero, FaDev, FaDharmachakra, FaHeadSideCough, FaHome, FaMobile, FaMoneyBill, FaMoneyCheck, FaProductHunt, FaProjectDiagram, FaRegUserCircle, FaSalesforce, FaUser, FaUsers, FaWeebly} from "react-icons/fa"
import { Context } from './Contex'

const Gigs = () => {
   
    const navigate=useNavigate()
    const handleNavigate = ()=>{
        navigate("/contactus")
    }
  return (
    <div className='OurServicesWrap'>
        <div className='OurServices'>
            <div className='OurServicesHeading'>
              <h1>Our Services</h1>
            </div>
            <div className='OurServicesBody'>
              
                <div className='OurService'>
                    <FaDharmachakra className='OurServiceBodyIcon'/>
                    <h2>Custom Software and Web Development:</h2>
                    <p>We offer tailored solutions to meet your unique needs, websites for your business and company, web applications, portfolio websites and lots more.</p>
                </div>

                

                <div className='OurService'>
                    <FaMobile className='OurServiceBodyIcon'/>
                    <h2>Mobile App Development:</h2>
                    <p>We help you build your intuitive and feature-rich mobile applications for iOS, Android, and more.</p>
                </div>

                <div className='OurService'>
                    <FaUsers className='OurServiceBodyIcon'/>
                    <h2>UI/UX Design:</h2>
                    <p>We Creating visually stunning and user-friendly interfaces to enhance user experiences.</p>
                </div>

                <div className='OurService'>
                    <FaAssistiveListeningSystems className='OurServiceBodyIcon'/>
                    <h2>Software Maintenance and Support:</h2>
                    <p>Ensuring your software remains reliable and up-to-date with ongoing assistance and upkeep.</p>
                </div>

                <div className='OurService'>
                    <FaProjectDiagram className='OurServiceBodyIcon'/>
                    <h2>Project Management:</h2>
                    <p>Expert oversight from inception to delivery, ensuring your projects are completed on time and within budget.</p>
                </div>

                <div className='OurService'>
                    
                    <FaMoneyCheck className='OurServiceBodyIcon'/>
                    <h2>E-commerce Solutions:</h2>
                    <p>We develop online shopping platforms and e-commerce websites to help you reach customers and drive sales efficiently.</p>
                </div>

                <div className='OurService'>
                    <FaDev className='OurServiceBodyIcon'/>
                    <h2>API Development:</h2>
                    <p>Designing and implementing APIs to seamlessly integrate your systems and services.</p>
                </div>

                <div className='OurService'>
                    <FaMoneyBill className='OurServiceBodyIcon'/>
                    <h2>Payment Integration:</h2>
                    <p>Streamlining transactions by integrating secure payment gateways into your software or website, ensuring smooth and secure financial transactions for your users.</p>
                </div>
            </div>
            <div>
              <div className='ContactUsNowWrap'>
                <h1 onClick={handleNavigate}>Click to contact us now for your projects</h1>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Gigs
