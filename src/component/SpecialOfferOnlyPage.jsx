import React from 'react'
import SpecialOffer from './SpecialOffer'

const SpecialOfferOnlyPage = () => {
  return (
    <div className='TrainingOnlyPageWrap'>
        <h1 style={{color:"blue",width:"100%",backgroundColor:"rgba(164, 164, 255, 0.5)",textAlign:"center"}}>DIGITAL PREMIUM TECH</h1>
        <p style={{backgroundColor:"rgba(164, 164, 255, 0.5)",width:"100%",textAlign:"center",paddingBottom:"1vh"}}>Your best tech space for productivity and innovation</p>
      <SpecialOffer/>
    </div>
  )
}

export default SpecialOfferOnlyPage
