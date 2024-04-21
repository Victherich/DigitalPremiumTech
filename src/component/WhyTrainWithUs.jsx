import React, { useContext } from 'react'
import "../CSS/WhyTrainWithUs.css"
import idea from "../Images/flat-color-icons_idea.png"
import { useNavigate } from 'react-router-dom'
import { Context } from './Contex'

const WhyTrainWithUs = () => {

    const navigate=useNavigate()
    const handleNavigate = ()=>{
        navigate("/contactus")
   
    }
  return (
    <div className='WhyTrainWithUsWrap'>
        <div className='WhyTrainWithUs'>
            <div className='WhyTrainWithUsHeading'>
                <h1>Why train with Us?</h1>
            </div>
            <div className='WhyTrainWithUsBody'>
                <div className='WhyTrainWithUsBodyItem'>
                    <p>You will get online training from the comfort of your home.</p>
                    <img src={idea} alt="logo"/>
                </div>
                <div className='WhyTrainWithUsBodyItem'>
                    <img src={idea} alt="logo"/>
                    <p>You will get the best teaching ever</p>
                </div>
                <div className='WhyTrainWithUsBodyItem'>
                    <p>You will get the cheapest price ever</p>
                    <img src={idea} alt="logo"/>
                </div>
                <div className='WhyTrainWithUsBodyItem'>
                    <img src={idea} alt="logo"/>
                    <p>You will build Real life projects for best learning</p>
                </div>
                <div className='WhyTrainWithUsBodyItem'>
                    <p>You will get Coaching and mentorship for life</p>
                    <img src={idea} alt="logo"/>
                </div>
                <div className='WhyTrainWithUsBodyItem'>
                    <img src={idea} alt="logo"/>
                    <p>You will have Access to tech stars on demand</p>
                </div>
                <div className='WhyTrainWithUsBodyItem'>
                    <p>You will get Certificate of participation</p>
                    <img src={idea} alt="logo"/>
                </div>
                <div className='WhyTrainWithUsBodyItem'>
                    <img src={idea} alt="logo"/>
                    <p>You will get 10% cash back on referrals</p>
                </div>
                <div className='WhyTrainWithUsBodyItem'>
                    <p>You can pay in 3 installments</p>
                    <img src={idea} alt="logo"/>
                </div>
            </div>
        </div>
        <div className='ContactUsNowWrap'>
                <h1 onClick={handleNavigate}>Contact us now !!!</h1>
              </div>
    </div>
  )
}

export default WhyTrainWithUs
