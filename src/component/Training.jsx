import React from 'react'
// import '../CSS/Training.css'
import "../CSS2/Training2.css"
import TrainingImage1 from "../Images/Training pic 1.png"
import TrainingImage2 from "../Images/Training pic 2.png"
import { useNavigate } from 'react-router-dom'
import TrainingImage3 from "../Images/Training pic 3.jpeg"
import TrainingImage4 from "../Images/Training pic 4.jpeg"

const Training = () => {
    const navigate = useNavigate()
    const handleNavigate = ()=>{
        navigate("/forntendtrainingdetailpage")
    }

    const handleNavigate2 =()=>{
        navigate("/uiuxtrainingdetailpage")
    }

  return (
    <div className='TrainingWrap'>
        <div className='Training'>
            <div className='OurTrainingHeadingWrap'>
                <h1>OUR TRAINING PROGRAMS AND PACKAGES</h1>
            </div>
            <div className='TrainingMotivation'>
                <p>Achieve your dream of Becoming a FrontEnd Software Engineer Today</p>
                <p>Achieve your dream of Becoming a BackEnd Software Engineer Today</p>
                <p>Achieve your dream of Becoming a UIUX / Product Designer Today</p>
                <p>Our Teaching is the best; Our Tutors are the best and Our Prices are the best</p>
                <div>
                <a style={{fontSize:"1vw"}} href="https://www.freepik.com/free-photo/glasses-near-laptop-reflect-light-from-screen-dark-copy-space_19576454.htm#fromView=search&page=1&position=6&uuid=a221b30e-82a3-4cc6-8593-9e112e0f65b4">Image by pvproductions on Freepik</a>
                </div>
            </div>

            {/* <div className='OurTrainingHeadingWrap'>
                <h1>Our Packages</h1>
            </div> */}
            <div className='OurTrainings'>
                <div className='OurTrainingCard'>
                    <div className='OurTrainingCardImageWrap'>
                        <img src={TrainingImage3} alt="training"/>
                    </div>
                    <div className='OurTrainingCardTextWrap'>
                        <h2>FRONT-END DEVELOPMENT PACKAGE</h2>
                        <p>HTML, CSS</p>
                        {/* <p>CSS</p> */}
                        <p>JAVA SCRIPT, REACT JS</p>
                        {/* <p>REACT JS</p> */}
                        <p>GIT HUB, HOSTING</p>
                        {/* <p>HOSTING</p> */}
                        <p>BACK END API CONSUMPTION</p>
                        <p>DEVELOPMENT OF LIVE WEB APPLICATIONS</p>
                        <p>CERTIFICATE OF PARTICIPATION</p>
                        <p>This Course is designed to make you an independent 
                            front-end Web developer withing the space of 3 months</p>
                        <button onClick={handleNavigate}>Join for Free </button>
                    </div>
                </div>
                <div className='OurTrainingCard'>
                    <div className='OurTrainingCardImageWrap'>
                        <img src={TrainingImage4} alt="training"/>
                    </div>
                    <div className='OurTrainingCardTextWrap'>
                    <h2>UIUX / PRODUCT DESIGN</h2>
                        <p>UX DESIGN</p>
                        <p>UI DESIGN</p>
                        <p>FIGMA, FIGJAM</p>
                        <p>Free mentorship for life</p>
                        <p>This Course is designed to make you a UIUX / Product Designer withing 
                            the space of 2 months.</p>
                        <button onClick={handleNavigate2}>Join for Free </button>
                    </div>
                </div>
                
            </div>
   
        </div>
    </div>
  )
}

export default Training
