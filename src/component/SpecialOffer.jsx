import React, { useContext,useState } from 'react'
// import "../CSS/SpecialOffer.css"
import "../CSS2/SpecialOffer2.css"
import "animate.css"
import {FaClosedCaptioning, FaHome, FaInternetExplorer, FaRegWindowClose, FaUser, FaUsers} from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import { Context } from './Contex'

const SpecialOffer = () => {
  const {}=useContext(Context)
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate("/bussinesswebsiteoffer")
    
  }

  const handleNavigate2 = () => {
    navigate("/portfoliowebsiteoffer")
  }

  

  const [portfolioSamplesOption,setPortfolioSamplesOption]=useState(false)
  const [sampleContents,setSampleContents]=useState("View Samples")

  const handlePortfolioSampleOption = ()=>{
    setPortfolioSamplesOption(!portfolioSamplesOption)
    if(portfolioSamplesOption){
      setSampleContents("View Samples")
    }else{
      setSampleContents("View less...")
    }
  }

  const handleNavigate3 = (url)=>{
    window.open(url,"_blank")
  }

  const handleNavigate4 = ()=>{
    navigate("/forntendtrainingdetailpage")
  }

  const handleNavigate5 = ()=>{
    navigate("/uiuxtrainingdetailpage")
  }
  return (
    <div className='SpecialOfferWrap'>
        <div className='SpecialOffers'>
            <div className='SpecialOffersHeader'>
                <h1 class="animate__animated animate__tada">Special Offers for you!!!</h1>
            </div>
            
            <div className='SpecialOffersBody'>
            <div className='SpecialOffer'>
                <FaHome className='SpecialOfferIcon'/>
                <p>We shall <span style={{fontWeight:"bold",color:"blue",textDecoration:"underline"}}>BUILD A WEBSITE FOR YOUR BUSINESS</span> for as low as 10,000 naira 
                  (aside hosting and domain name); and you get to pay after Serivce.
                </p>
                <p>Offer Valid for First 50 people.</p>
                <button class="animate__animated animate__bounce" onClick={handleNavigate}> Place your order now</button>
            </div>
            <div className='SpecialOffer'>
            <FaUser className='SpecialOfferIcon'/>
                <p>Instead of sticking to the old outdated regular CV, we shall <span style={{fontWeight:"bold",color:"blue",textDecoration:"underline"}}>BUILD A PROFESSIONAL PORTFOLIO WEBSITE</span> for you to showcase your 
                  Qualifications and experiences in an interractive manner with just 10,000 naira 
                  (aside hosting and domian name); and you get to pay after Serivce.
                </p>
                <p>Offer Valid for First 50 people.</p>
                <div className='ViewSampleAndButtonWrap'>
                    <p onClick={handlePortfolioSampleOption}>{sampleContents}</p>
                    
                    <button class="animate__animated animate__bounce"
                    onClick={handleNavigate2} >Place your order now</button>
                </div>
                {portfolioSamplesOption&&<div className='PortfolioWebsiteSamplesOption'>
                        <p onClick={()=>handleNavigate3("https://victorndusoftwareengineer.vercel.app/")}>View Victor Ndu's Portfolio</p>
                        <p>View Ambassador's Portfolio</p>  
                    </div>}
            </div>
            <div className='SpecialOffer'>
            <FaInternetExplorer className='SpecialOfferIcon'/>
                <p><span style={{fontWeight:"bold",color:"blue",textDecoration:"underline"}}>BECOME A FRONT-END WEB DEVELOPER</span> with certification in 3 months with our
                   Comprehensive Training program for just 50,000 naira and you can pay in 3 installments.
                  Offer valid for first 10 people.</p>
               
                <button class="animate__animated animate__bounce"
                onClick={handleNavigate4}
                >Book your slot for free now</button>
            </div>
            <div className='SpecialOffer'>
            <FaUsers className='SpecialOfferIcon'/>
                <p><span style={{fontWeight:"bold",color:"blue",textDecoration:"underline"}}>LEARN UIUX / PRODUCT DESIGN</span> with certification in 2 months with our comprehensive
                   Training program for just 30,000 naira and you can pay in 2 installments.
                  Offer valid for first 10 people.</p>

                <button class="animate__animated animate__bounce"
                onClick={handleNavigate5}>Book your slot for free now</button>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default SpecialOffer;
