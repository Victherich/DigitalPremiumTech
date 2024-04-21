
import React, { useContext, useEffect, useState } from 'react';
import "../CSS/BusinessWebsiteOffer.css";
import WebsiteImg from "../Images/Homehub screenshots.4d6cb57dadef51c1c906.png";
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaBackward } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';
import VicPortFoliogif from "../Images/Vic portfolio gif.gif"
import { Context } from './Contex';
import TermsAndConditions from './TermsAndConditions';

const PortfolioWesiteOffer = () => {
    const {showTermsAndConditionsUI,setShowTermsAndConditionsUI}=useContext(Context)

    const [formData, setFormData] = useState({
        fullName: "", email: "", phoneNumber: "", confirmPhoneNumber: "", address: "", 
        orderName: "Build Your Portfolio Website", orderId: null,
        customerMessage:"Thank you for Contacting Digital Premium Tech. your best tech space for productivity and innovation. One of our representatives shall contact you shortly. Kindly reply this email , providing us the following details. |(1) Your profession title (2) List of your professional qualifications and/or certifications (3)All your necessary contact information, including phone number , email, social media handles etc. (4)Write short inspiring and favourite note about you in relation to your profession. (5) List of projects you ve done with brief descriptions and a perfect representational pictures and images for each of the project. (6) Preferred Profile picture of your self. (7) Another picture that captures you performing duties in your area of profession.(8) Scanned or softcopy pitures of your neccessary professional certifications. (9)Any other information you might wish to include on your portfolio website " 
    });
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedError, setIsCheckedError] = useState("");
    const [confirmPhoneNumberError, setConfirmPhoneNumberError] = useState("");
    const [isValid, setIsValid] = useState(false);

    console.log(formData)
    

    const handleIsValid = () => {
        let isValid = true;

        if (!isChecked) {
            setIsCheckedError("Please agree to terms and conditions to proceed");
            isValid = false;
        } else {
            setIsCheckedError("");
        }

        if (formData.phoneNumber !== formData.confirmPhoneNumber) {
            setConfirmPhoneNumberError("Phone numbers do not match");
            isValid = false;
        } else {
            setConfirmPhoneNumberError("");
        }

        setIsValid(isValid);
    }

    useEffect(() => {
        handleIsValid();
    }, [formData.confirmPhoneNumber, isChecked]);

    const handleCheckboxChange = async() => {
        await setIsChecked(!isChecked);
        const newRandomNumber = Math.random()*10000000000000
        setFormData(prevFormData => ({
            ...prevFormData,
            orderId: `DPT${newRandomNumber}`}))
      
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        if (isValid) {
            const loadingAlert = Swal.fire({
                title: "Loading",
                text: "Please wait...",
                allowOutsideClick: false,
                allowEscapeKey: false,
                showConfirmButton: false
              });
        
              Swal.showLoading();
            try{
                const response = axios.post("https//:www.gmail.com",formData)
                console.log(response.data)
                loadingAlert.close();
                Swal.fire({
                    icon:"success",
                    title:"Congratulations",
                    text:`Your order has been placed with a reference number ${formData.orderId}; One of our representatives shall contact you soon. Please check your email also for more details. Thanks`,
                    showConfirmButton:true,
                    showCancelButton:false,
                })
            }catch(error){
                console.error
                loadingAlert.close();
                Swal.fire({
                    icon:"error",
                    title:"..Oops",
                    text:"Something went wrong",
                    showConfirmButton:false,
                    showCancelButton:false,
                    timer:2000
                })
            }
            
        }
    }

    const handleLocation = ()=>{
        window.history.back()
    }

    const handleNavigate3 = (url)=>{
        window.open(url,"_blank")
      }

    return (
        <div className='ContactUsWrap'>
            <div className='ContactUs'>

                <div className='ContactUsHeader'>
                    <h1>Build Your Portfolio Website</h1>
                </div>
                <div className='BusinessWebsiteImgWrap' >
                    <img src={VicPortFoliogif} alt="Website" style={{animation:'none'}}/>
                </div>
                <div className='ContactUsBody'>
                    <div className='ContactUsBodyRight BusinessWebsiteOfferBodyRight'>
                    <p>Instead of sticking to the old outdated regular CV, we shall build for you a 
                         professional Portfolio Website to showcase your Qualifications and experiences in 
                         an interractive manner with just 10,000 naira (aside hosting and domian name); 
                         and you get to pay after Serivce.<br/><br/>
                         Offer Valid for First 50 people.<br/><br/>
                         Just fill your details in the form and a brief message in the respective fields;<br/> One of our team representatives 
                        shall contact you shortly for further details. Thanks. </p>  

                        <div className='PortfolioWebsiteSamplesOption PortfolioWebsiteSamplesOption2' >
                            <h3>Samples</h3>
                            <p onClick={()=>handleNavigate3("https://victorndusoftwareengineer.vercel.app/")}>View Victor Ndu's Portfolio</p>
                            <p>View Ambassador's Portfolio</p>  
                        </div>
                    </div>
                    <div className='ContactUsBodyLeft'>
                        <form onSubmit={handleSubmit}>
                            <div className='BusinessWebsiteformNote'>
                                <p>Please fill the appropriate information in the respective fields,<br />
                                    then agree to our terms and conditions by checking the box designated, <br />
                                    then click on the submit button to submit your request.</p>
                                <p>Please note that by checking the box and submitting this form, <br />
                                    you have accepted this offer and agree to pay in accordance with the offer.</p><br />
                                <p 
                                style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
                                onClick={()=>setShowTermsAndConditionsUI(true)}
                                >Click to read Terms and conditions</p>
                            </div>
                                <input type="text" value={formData.customerMessage} hidden/>
                            <label>
                                <p>Service:</p>
                                <input type="text" value={formData.orderName} required />
                            </label>

                            <label>
                                <p>Enter Full Name:</p>
                                <input type="text" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} placeholder='Eg. John Ani' required />
                            </label>

                            <label>
                                <p>Enter Email address:</p>
                                <input type="text" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder='example@gmail.com' required />
                            </label>

                            <label>
                                <p>Enter Phone no.:</p>
                                <input type="text" value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} placeholder="eg. 07063448446" required />
                            </label>

                            <label style={{ flexDirection: "column" }}>
                                <div style={{ display: "flex", width: "100%", height: "100%", justifyContent: "space-between", alignItems: "center" }}>
                                    <p>Confirm Phone no.:</p>
                                    <input type="text" value={formData.confirmPhoneNumber} onChange={(e) => setFormData({ ...formData, confirmPhoneNumber: e.target.value })} placeholder="confirm phone number" required />
                                </div>
                                <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{confirmPhoneNumberError}</p>
                            </label>

                            <label>
                                <p>Enter Complete address information:</p>
                                <input type="text" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} placeholder="eg No. 28 Albert street Surulere Lagos state Nigeria" required />
                            </label>

                            
                            <div className='TermsAndConditionsAgreeWrap'>
                                <div className='TermsAndConditionsAgreeWrapUp'>
                                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                                    <p>I agree to <span onClick={()=>setShowTermsAndConditionsUI(true)}>Terms and Conditions</span></p>
                                </div>
                                <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{isCheckedError}</p>
                            </div>
                            <div className='SubmitButtonWrap'>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                    {showTermsAndConditionsUI&&<TermsAndConditions/>}
                </div>
                <br/><br/>
                <div className='SubmitButtonWrap' style={{justifyContent:"center",alignItems:"center"}}>
                    <button 
                    onClick={handleLocation}
                    style={{height:"5vh",width:"10vw",display:"flex",justifyContent:"center",gap:"5%",alignItems:"center"}}><FaBackward/> Back</button>
                </div>
            </div>
        </div>
    );
}

export default PortfolioWesiteOffer;


