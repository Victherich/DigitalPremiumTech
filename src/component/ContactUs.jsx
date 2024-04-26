// import React, { useState ,useEffect} from 'react'
// import "../CSS/ContactUs.css"
// import Logo from "../Images/logo.jpeg"
// import Swal from 'sweetalert2'
// import { FaBackward } from 'react-icons/fa6'
// import axios from 'axios'

// const ContactUs = () => {
//     const [formData, setFormData] = useState({
//         fullName: "", email: "", phoneNumber: "", confirmPhoneNumber: "", address: "", message: "", 
//         customerMessage:"Thank you for Contacting Digital Premium Tech. your best tech space for productivity and innovation. One of our representatives shall contact you shortly. Below are your details "
//     });

//     console.log(formData)
//     const [isValid, setIsValid] = useState(false);
//     const [confirmPhoneNumberError, setConfirmPhoneNumberError] = useState("");

    

//     const handleIsValid = () => {
//         let isValid = true;

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
//     }, [formData.confirmPhoneNumber]);

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
//                 const response = await axios.post("http://localhost:3000/api/send-email",formData)
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

// const handleLocation =()=>{
//     window.history.back()
// }

// const handleSubmit2 = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);

//     try {
//         const response = await axios.post("https://formsubmit.co/digitalpremiumtech@gmail.com", {
//             name: formData.get("name"),
//             email: formData.get("email")
//         });
        
//         console.log(response.data); // Log the response from the server
//         // Perform any additional actions upon successful submission
//         Swal.fire({
//             icon: "success",
//             title: "Form submitted successfully",
//             text: "Thank you for your submission!",
//             showConfirmButton: true
//         });
//     } catch (error) {
//         console.error(error);
//         // Handle errors, show error message to the user, etc.
//         Swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: "Something went wrong. Please try again later.",
//             showConfirmButton: true
//         });
//     }
// };


//   return (
//     <div className='ContactUsWrap'>
//         <div className='ContactUs'>
//             <div className='ContactUsHeader'>
//                 <h1>Contact Us</h1>
//             </div>
//         <div className='ContactUsBody'>
                
//                 <div className='ContactUsBodyLeft'>
//                     <form onSubmit={handleSubmit}>
//                         <input type="text" value={formData.customerMessage} hidden/>
//                         <label>
//                             <p>Enter Full Name:</p>
//                             <input type="text" value={formData.fullName} onChange={(e)=>setFormData({...formData,fullName:e.target.value})} placeholder='Eg. John Ani' required/>
//                         </label>
                        
//                         <label>
//                             <p>Enter Email address:</p>
//                             <input type="text" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} placeholder='example@gmail.com' required/>
//                         </label>

//                         <label>
//                             <p>Enter Phone number:</p>
//                             <input type="text" value={formData.phoneNumber} onChange={(e)=>setFormData({...formData,phoneNumber:e.target.value})} placeholder="07063448446" required/>
//                         </label>

//                         <label style={{ flexDirection: "column" }}>
//                                 <div style={{ display: "flex", width: "100%", height: "100%", justifyContent: "space-between", alignItems: "center" }}>
//                                     <p>Confirm Phone no.:</p>
//                                     <input type="text" value={formData.confirmPhoneNumber} onChange={(e)=>setFormData({...formData,confirmPhoneNumber:e.target.value})} placeholder="confirm phone number" required />
//                                 </div>
//                                 <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{confirmPhoneNumberError}</p>
                                
//                             </label>
                            
//                         <label>
//                                 <p>Enter Complete address information:</p>
//                                 <input type="text" value={formData.address} onChange={(e)=>setFormData({...formData,address:e.target.value})} placeholder="eg No. 28 Albert street Surulere Lagos state Nigeria" required />
//                             </label>

//                         <div className='TextAreaWrap'>
//                             <p>Message:</p>
//                             <textarea type="text" value={formData.message} onChange={(e)=>setFormData({...formData,message:e.target.value})} placeholder='Please enter your message here' required/>
//                         </div>
//                         <div className='SubmitButtonWrap'>
//                            <button type="submit">Submit</button>
//                         </div>
//                     </form>

//                     {/* empty div for space */}
//                     <div style={{width:"100%",height:"20vh"}}></div>
//                 </div>
//                 <div className='ContactUsBodyRight'>
//                     <img src={Logo} alt="Contact us"/>

//                     {/* empty div for space */}
//                     <div style={{width:"100%",height:"40vh"}}></div>
//                 </div>
//         </div>
//         <div className='SubmitButtonWrap' style={{justifyContent:"center",alignItems:"center"}}>
//                     <button 
//                     onClick={handleLocation}
//                     style={{height:"5vh",width:"10vw",display:"flex",justifyContent:"center",gap:"5%",alignItems:"center"}}><FaBackward/> Back</button>
//                 </div></div>


    
// <div>
// <form submit={handleSubmit2} action="https://formsubmit.co/digitalpremiumtech@gmail.com" method="POST">
//      <input type="text" name="name" required placeholder='name'/>
//      <input type="email" name="email" required placeholder='email'/>
//      <input type="text" name="message" required placeholder='message'/>
//      <button type="submit">Send</button>
//      <button type="button">Ok</button>
//      </form>
// </div>
                


    
//     </div>
//   )
// }

// export default ContactUs


import React, { useState ,useEffect} from 'react'
import "../CSS/ContactUs.css"
import Logo from "../Images/logo.jpeg"
import Swal from 'sweetalert2'
import { FaBackward } from 'react-icons/fa6'
import axios from 'axios'

const ContactUs = () => {
    const [formData, setFormData] = useState({orderName:"General Message",
        fullName: "", email: "", phoneNumber: "", confirmPhoneNumber: "", address: "", message: "", 
    });

    console.log(formData)
    const [isValid, setIsValid] = useState(false);
    const [confirmPhoneNumberError, setConfirmPhoneNumberError] = useState("");
    const [openSubmit,setOpenSubmit]=useState(false)
    const [fullNameError,setFullnameError]=useState("")
    const [emailError,setEmailError]=useState("")
    const [phoneNumberError,setPhoneNumberError]=useState("")
    const [addressError,setAddressError]=useState("")
    const [messageError,setMessageError]=useState("")



    const [enablealidation,setEnablealidatio]=useState(false)
    useEffect(() => {
        if(enablealidation===true){
            handleIsValid();
        }
    }, [formData]);

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

        if (formData.message==="") {
            setMessageError("please enter your message");
            isValid = false;
        } else {
            setMessageError("");
        }

        setIsValid(isValid);
    }

    const handleOpenSubmit = async() => {
        await handleIsValid();
        setEnablealidatio(true)
        if (isValid){
            setOpenSubmit(true)
        }
    };

    

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

const handleLocation =()=>{
    window.history.back()
}




  return (
    <div className='ContactUsWrap'>
        <div className='ContactUs'>
            <div className='ContactUsHeader'>
                <h1>Contact Us</h1>
            </div>
        <div className='ContactUsBody'>
                
                <div className='ContactUsBodyLeft'>
                    <form action="https://formsubmit.co/digitalpremiumtech@gmail.com" method="POST">
                        <input type="text" name="Order Name" value={formData.orderName} hidden/>
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

                        <div className='TextAreaWrap'>
                            <div className='InputLabelChild'>
                                <p>Message:</p>
                                <textarea type="text" name="Message" value={formData.message} onChange={(e)=>setFormData({...formData,message:e.target.value})} placeholder='Please enter your message here' required/>
                            </div>
                            <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{messageError}</p>
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

                    {/* empty div for space */}
                    <div style={{width:"100%",height:"20vh"}}></div>
                </div>
                <div className='ContactUsBodyRight'>
                    <img src={Logo} alt="Contact us"/>

                    {/* empty div for space */}
                    <div style={{width:"100%",height:"40vh"}}></div>
                </div>
        </div>
        <div className='SubmitButtonWrap' style={{justifyContent:"center",alignItems:"center"}}>
                    <button 
                    onClick={handleLocation}
                    style={{height:"5vh",width:"10vw",display:"flex",justifyContent:"center",gap:"5%",alignItems:"center"}}><FaBackward/> Back</button>
                </div></div>
    
    </div>
  )
}

export default ContactUs


