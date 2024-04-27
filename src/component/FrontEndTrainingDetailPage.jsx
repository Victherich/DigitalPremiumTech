

// import React, { useContext, useEffect, useState } from 'react';
// import "../CSS/BusinessWebsiteOffer.css";
// import WebsiteImg from "../Images/Homehub screenshots.4d6cb57dadef51c1c906.png";
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { FaBackward } from 'react-icons/fa6';
// import { useLocation } from 'react-router-dom';
// import TermsAndConditions from './TermsAndConditions';
// import { Context } from './Contex';
// import TrainingPic1 from "../Images/Training pic 3.jpeg"


// const FrontEndTrainingDetailPage = () => {
//     const {showTermsAndConditionsUI,setShowTermsAndConditionsUI}=useContext(Context)
   
//     const [formData, setFormData] = useState({
//         fullName: "", email: "", phoneNumber: "", confirmPhoneNumber: "", address: "", 
//         orderName: "Front End Web Development Training",
//         customerMessage:"Thank you for Contacting Digital Premium Tech. your best tech space for productivity and innovation. One of our representatives shall contact you shortly."
//     });
//     const [isChecked, setIsChecked] = useState(false);
//     const [isCheckedError, setIsCheckedError] = useState("");
//     const [confirmPhoneNumberError, setConfirmPhoneNumberError] = useState("");
//     const [isValid, setIsValid] = useState(false);

//     console.log(formData)
    

//     const handleIsValid = () => {
//         let isValid = true;

//         if (!isChecked) {
//             setIsCheckedError("Please agree to terms and conditions to proceed");
//             isValid = false;
//         } else {
//             setIsCheckedError("");
//         }

//         if (formData.phoneNumber !== formData.confirmPhoneNumber) {
//             setConfirmPhoneNumberError("Phone numbers do not match");
//             isValid = false;
//         } else {
//             setConfirmPhoneNumberError("");
//         }

//         setIsValid(isValid);
//     }

//     useEffect(() => {
//         handleIsValid();
//     }, [formData.confirmPhoneNumber, isChecked]);

//     const handleCheckboxChange = async() => {
//         await setIsChecked(!isChecked);
//         const newRandomNumber = Math.random()*10000000000000
//         setFormData(prevFormData => ({
//             ...prevFormData,
//             orderId: `DPT${newRandomNumber}`}))
      
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
       
//         if (isValid) {
//             const loadingAlert = Swal.fire({
//                 title: "Loading",
//                 text: "Please wait...",
//                 allowOutsideClick: false,
//                 allowEscapeKey: false,
//                 showConfirmButton: false
//               });
        
//               Swal.showLoading();
//             try{
//                 const response = axios.post("https//:www.gmail.com",formData)
//                 console.log(response.data)
//                 loadingAlert.close();
//                 Swal.fire({
//                     icon:"success",
//                     title:"Congratulations",
//                     text:`Your request is sent successfully. One of our representatives shall contact you soon. Please check your email also for more details. Thanks`,
//                     showConfirmButton:true,
//                     showCancelButton:false,
//                 })
//             }catch(error){
//                 console.error(error)
//                 loadingAlert.close();
//                 Swal.fire({
//                     icon:"error",
//                     title:"..Oops",
//                     text:"Something went wrong",
//                     showConfirmButton:false,
//                     showCancelButton:false,
//                     timer:2000
//                 })
//             }
            
//         }
//     }

//     const handleLocation = ()=>{
//         window.history.back()
//     }

   

//     return (
//         <div className='ContactUsWrap'>
//             <div className='ContactUs'>

//                 <div className='ContactUsHeader'>
//                     <h1>Front End Web Development Training</h1>
//                 </div>
//                 <div className='BusinessWebsiteImgWrap'>
//                     <img src={TrainingPic1} alt="Website" />
//                 </div>
//                 <div className='ContactUsBody'>
//                     <div className='ContactUsBodyRight BusinessWebsiteOfferBodyRight'>
//                         <p>Become a Front-End Web Developer with certification in 3 months with our Comprehensive Training program for just 50,000 naira and you can pay in 3 installments. Offer valid for first 10 people. <br /><br />
//                             <br/>
//                             <span style={{textDecoration:"underline"}}>You shall learn the following and lots more:</span><br/>
//                             | HTML | CSS | JavaScript | ReactJS | GitHub | Hosting | Backend API Consumption | Live Web Application Developments | And lots more...
//                             <br/>
//                             <br/>
//                             Our Teaching is the Best.
//                             <br/>
//                             So Just fill-in your details in the form;<br /> One of our team representatives shall contact you shortly for further details. Thanks. </p>
//                     </div>
//                     <div className='ContactUsBodyLeft'>
//                         <form onSubmit={handleSubmit}>
//                             <div className='BusinessWebsiteformNote'>
//                                 <p>Please fill the appropriate information in the respective fields,<br />
//                                     then agree to our terms and conditions by checking the box designated, <br />
//                                     then click on the submit button to submit your request.</p>
//                                 {/* <p>Please note that by checking the box and submitting this form, <br />
//                                     you have accepted this offer and agree to pay in accordance with the offer.</p> */}
//                                     <br />
//                                 <p 
//                                 style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
//                                 onClick={()=>setShowTermsAndConditionsUI(true)}>Click to read Terms and conditions</p>
//                             </div>
//                                 <input type="text" value={formData.customerMessage} hidden/>
//                             <label>
//                                 <p>Service:</p>
//                                 <input type="text" value={formData.orderName} required />
//                             </label>

//                             <label>
//                                 <p>Enter Full Name:</p>
//                                 <input type="text" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} placeholder='Eg. John Ani' required />
//                             </label>

//                             <label>
//                                 <p>Enter Email address:</p>
//                                 <input type="text" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder='example@gmail.com' required />
//                             </label>

//                             <label>
//                                 <p>Enter Phone no.:</p>
//                                 <input type="text" value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} placeholder="eg. 07063448446" required />
//                             </label>

//                             <label style={{ flexDirection: "column" }}>
//                                 <div style={{ display: "flex", width: "100%", height: "100%", justifyContent: "space-between", alignItems: "center" }}>
//                                     <p>Confirm Phone no.:</p>
//                                     <input type="text" value={formData.confirmPhoneNumber} onChange={(e) => setFormData({ ...formData, confirmPhoneNumber: e.target.value })} placeholder="confirm phone number" required />
//                                 </div>
//                                 <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{confirmPhoneNumberError}</p>
//                             </label>

//                             <label>
//                                 <p>Enter Complete address information:</p>
//                                 <input type="text" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} placeholder="eg No. 28 Albert street Surulere Lagos state Nigeria" required />
//                             </label>

//                             {/* <div className='TextAreaWrap'>
//                                 <p>Message:</p>
//                                 <textarea type="text" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder='Please Write short message here about your business' required />
//                             </div> */}
//                             <div className='TermsAndConditionsAgreeWrap'>
//                                 <div className='TermsAndConditionsAgreeWrapUp'>
//                                     <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
//                                     <p>I agree to <span onClick={()=>setShowTermsAndConditionsUI(true)}>Terms and Conditions</span></p>
//                                 </div>
//                                 <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{isCheckedError}</p>
//                             </div>
//                             <div className='SubmitButtonWrap'>
//                                 <button type="submit">Submit</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//                 <br/><br/>
//                 <div className='SubmitButtonWrap' style={{justifyContent:"center",alignItems:"center"}}>
//                     <button 
//                     onClick={handleLocation}
//                     style={{height:"5vh",width:"10vw",display:"flex",justifyContent:"center",gap:"5%",alignItems:"center"}}><FaBackward/> Back</button>
//                 </div>
//             </div>
//             {showTermsAndConditionsUI&&<TermsAndConditions/>}
//         </div>
//     );
// }

// export default FrontEndTrainingDetailPage;





import React, { useContext, useEffect, useState } from 'react';
import "../CSS/BusinessWebsiteOffer.css";
import WebsiteImg from "../Images/Homehub screenshots.4d6cb57dadef51c1c906.png";
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaBackward } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';
import TermsAndConditions from './TermsAndConditions';
import { Context } from './Contex';
import TrainingPic1 from "../Images/Training pic 3.jpeg"


const FrontEndTrainingDetailPage = () => {
    const {showTermsAndConditionsUI,setShowTermsAndConditionsUI}=useContext(Context)
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedError, setIsCheckedError] = useState("");
    const [formData, setFormData] = useState({orderName:"Front End Web Development Training",
    fullName: "", email: "", phoneNumber: "", confirmPhoneNumber: "", address: "", 
});

console.log(formData)
const [isValid, setIsValid] = useState(false);
const [confirmPhoneNumberError, setConfirmPhoneNumberError] = useState("");
const [openSubmit,setOpenSubmit]=useState(false)
const [fullNameError,setFullnameError]=useState("")
const [emailError,setEmailError]=useState("")
const [phoneNumberError,setPhoneNumberError]=useState("")
const [addressError,setAddressError]=useState("")
// const [messageError,setMessageError]=useState("")

    


const [enablealidation,setEnablealidatio]=useState(false)
useEffect(() => {
    if(enablealidation===true){
        handleIsValid();
    }
}, [formData,isChecked]);

const handleIsValid = () => {
    let isValid = true;

    if (formData.fullName==="") {  
        setFullnameError("Please enter your full name")
        isValid = false;
    } else {
        setFullnameError("")
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {  
        setEmailError("Please enter your valid email address")
        isValid = false;
    } else {
        setEmailError("")
    }

    if (formData.phoneNumber==="") {  
        setPhoneNumberError("Please enter your phone number")
        isValid = false;
    } else {
        setPhoneNumberError("")
    }

    if (formData.phoneNumber !== formData.confirmPhoneNumber) {
        setConfirmPhoneNumberError("Phone numbers do not match");
        isValid = false;
    } else {
        setConfirmPhoneNumberError("");
    }

    if (formData.address==="") {  
        setAddressError("Please enter your address")
        isValid = false;
    } else {
        setAddressError("")
    }

    if(!isChecked){
        setIsCheckedError("Please agree to terms and conditions to proceed")
        isValid = false;
    }else{
        setIsCheckedError("")
    }


    setIsValid(isValid);
}


const handleCheckboxChange = async() => {
    setIsChecked(!isChecked);
    setEnablealidatio(true)
}

const handleSubmit = async (e) => {
    e.preventDefault();
        const loadingAlert = Swal.fire({
            title: "Loading",
            text: "Please wait...",
            allowOutsideClick: false,
            allowEscapeKey: false,
            showConfirmButton: false
          });
    
          Swal.showLoading();
}

const handleOpenSubmit = async() => {
    await handleIsValid();
    setEnablealidatio(true)
    if (isValid){
        setOpenSubmit(true)
    }
};




    const handleLocation = ()=>{
        window.history.back()
    }

   

    return (
        <div className='ContactUsWrap'>
            <div className='ContactUs'>

                <div className='ContactUsHeader'>
                    <h1>Front End Web Development Training</h1>
                </div>
                <div className='BusinessWebsiteImgWrap'>
                    <img src={TrainingPic1} alt="Website" />
                </div>
                <div className='ContactUsBody'>
                    <div className='ContactUsBodyRight BusinessWebsiteOfferBodyRight'>
                        <p>Become a Front-End Web Developer with certification in 3 months with our Comprehensive Training program for just 50,000 naira and you can pay in 3 installments. Offer valid for first 10 people. <br /><br />
                            <br/>
                            <span style={{textDecoration:"underline"}}>You shall learn the following and lots more:</span><br/>
                            | HTML | CSS | JavaScript | ReactJS | GitHub | Hosting | Backend API Consumption | Live Web Application Developments | And lots more...
                            <br/>
                            <br/>
                            Our Teaching is the Best.
                            <br/>
                            So Just fill-in your details in the form;<br /> One of our team representatives shall contact you shortly for further details. Thanks. </p>
                    </div>
                    <div className='ContactUsBodyLeft'>
                        <form action="https://formsubmit.co/digitalpremiumtech@gmail.com" method="POST" >
                            <div className='BusinessWebsiteformNote'>
                                <p>Please fill the appropriate information in the respective fields,<br />
                                    then agree to our terms and conditions by checking the box designated, <br />
                                    then click on the submit button to submit your request.</p>
                                {/* <p>Please note that by checking the box and submitting this form, <br />
                                    you have accepted this offer and agree to pay in accordance with the offer.</p> */}
                                    <br />
                                <p 
                                style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
                                onClick={()=>setShowTermsAndConditionsUI(true)}>Click to read Terms and conditions</p>
                            </div>
                            <label>
                                <div className='InputLabelChild'>
                                <p>Service:</p>
                                <input type="text" name="Order Name" value={formData.orderName}/>
                                </div>
                            </label>

                            <label>
                            <div className='InputLabelChild'>
                                <p>Enter Full Name:</p>
                                <input type="text" name="Full Name" value={formData.fullName} onChange={(e)=>setFormData({...formData,fullName:e.target.value})} placeholder='Eg. John Ani' required/>
                            </div>
                            <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{fullNameError}</p>
                        </label>

                        <label>
                            <div className='InputLabelChild'>
                                <p>Enter Email address:</p>
                                <input type="text" name="Email" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} placeholder='example@gmail.com' required/>
                            </div>
                            <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{emailError}</p>
                            </label>


                            <label>
                            <div className='InputLabelChild'>
                                <p>Enter Phone number:</p>
                                <input type="text" name='Phone Number' value={formData.phoneNumber} onChange={(e)=>setFormData({...formData,phoneNumber:e.target.value})} placeholder="07063448446" required/>
                            </div>    
                            <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{phoneNumberError}</p>
                        </label>

                        <label>
                                <div className="InputLabelChild" >
                                    <p>Confirm Phone no.:</p>
                                    <input type="text" value={formData.confirmPhoneNumber} onChange={(e)=>setFormData({...formData,confirmPhoneNumber:e.target.value})} placeholder="confirm phone number" required />
                                </div>
                                <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{confirmPhoneNumberError}</p>
                                
                            </label>

                            <label>
                            <div className='InputLabelChild'>
                                 <p>Enter Complete address information:</p>
                                <input type="text" name="Address" value={formData.address} onChange={(e)=>setFormData({...formData,address:e.target.value})} placeholder="eg No. 28 Albert street Surulere Lagos state Nigeria" required />
                            </div>
                            <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{addressError}</p>
                        </label>

                        {/* <div className='TextAreaWrap'>
                            <div className='InputLabelChild'>
                                <p>Message:</p>
                                <textarea type="text" name="Message" value={formData.message} onChange={(e)=>setFormData({...formData,message:e.target.value})} placeholder='Please enter your message here' required/>
                            </div>
                            <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{messageError}</p>
                            </div> */}

                            <div className='TermsAndConditionsAgreeWrap'>
                                <div className='TermsAndConditionsAgreeWrapUp'>
                                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                                    <p>I agree to <span onClick={()=>setShowTermsAndConditionsUI(true)}>Terms and Conditions</span></p>
                                </div>
                                <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{isCheckedError}</p>
                            </div>



                            <div className='SubmitButtonWrap'>
                            <button type="button" onClick={handleOpenSubmit}>Proceed</button>
                            </div>

                            {openSubmit&&
                            <div className='FormSubmitUiWrap'>
                                <div className='FormSubmitUi'>
                                <p>You are about to submit your request and one of our representatives shall surely get back to you as soon as possible. Click on submit now and then expect our callback. Thanks.</p>
                                <button type="submit">Submit Now</button>
                                <p onClick={()=>setOpenSubmit(false)} style={{cursor:"pointer"}}>X</p>
                            </div>
                            </div>
                            }
                        </form>
                    </div>
                </div>
                <br/><br/>
                <div className='SubmitButtonWrap' style={{justifyContent:"center",alignItems:"center"}}>
                    <button 
                    onClick={handleLocation}
                    style={{height:"5vh",width:"20vw",display:"flex",justifyContent:"center",gap:"5%",alignItems:"center"}}><FaBackward/> Back</button>
                </div>
            </div>
            {showTermsAndConditionsUI&&<TermsAndConditions/>}
        </div>
    );
}

export default FrontEndTrainingDetailPage;

