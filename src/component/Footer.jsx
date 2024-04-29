import React from 'react'
import facebook from "../Images/logos_facebook.png"
// import "../CSS/Footer.css"
import "../CSS2/Footer2.css"
import phone from "../Images/teenyicons_phone-solid.png"
import email from "../Images/ic_round-email.png"

const Footer = () => {
  return (
    <div className='FooterWrap'>
      <div className='Footer'>
      <div className='FooterUpper'> 
      <div className='FooterEmail'><img src={email}/><p>digitalpremiumtech@gmail.com</p></div>
      <div className='FooterPhone'><img src={phone}/><p> +2347063480314</p></div>
      <div className='FooterSocial'><img src={facebook} alt="socialIcon"/>digitalpremiumtech</div>
      </div>
      <div className='FooterLower'>
        <h2>Digital Premium Tech:</h2>
        <p>We are bold when we say that we are Genuine and the Best</p>
      </div>
      </div>
    </div>
  )
}

export default Footer
