import React from 'react'
import Hero from './Hero'
import Training from './Training'
import WhyTrainWithUs from './WhyTrainWithUs'
import Gigs from './Gigs'
import Footer from './Footer'
import SpecialOffer from './SpecialOffer'


const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <SpecialOffer/>
      <Gigs/>
      <Footer/>
      <Training/>
      <WhyTrainWithUs/>
    </div>
  )
}

export default LandingPage
