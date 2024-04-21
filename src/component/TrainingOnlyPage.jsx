import React from 'react'
import Training from './Training'
import Hero from './Hero'
import WhyTrainWithUs from './WhyTrainWithUs'
import "../CSS/TrainingOnlyPage.css"

const TrainingOnlyPage = () => {
  return (
    <div className='TrainingOnlyPageWrap'>
      {/* <Hero/> */}
      <h1 style={{color:"blue"}}>DIGITAL PREMIUM TECH</h1>
      <p>Your best tech space for productivity and innovation</p>
      <Training/>
      <WhyTrainWithUs/>
    </div>
  )
}

export default TrainingOnlyPage
