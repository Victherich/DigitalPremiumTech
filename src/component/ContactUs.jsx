import React, { useState ,useEffect} from 'react'
import "../CSS/ContactUs.css"
import Logo from "../Images/logo.jpeg"
import Swal from 'sweetalert2'
import { FaBackward } from 'react-icons/fa6'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: "", email: "", phoneNumber: "", confirmPhoneNumber: "", address: "", message: "", 
        customerMessage:"Thank you for Contacting Digital Premium Tech. your best tech space for productivity and innovation. One of our representatives shall contact you shortly. Below are your details "
    });

    console.log(formData)
    const [isValid, setIsValid] = useState(false);
    const [confirmPhoneNumberError, setConfirmPhoneNumberError] = useState("");

    

    const handleIsValid = () => {
        let isValid = true;

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
    }, [formData.confirmPhoneNumber]);

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
                    text:`Your request is sent successfully. One of our representatives shall contact you soon. Please check your email also for more details. Thanks`,
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
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={formData.customerMessage} hidden/>
                        <label>
                            <p>Enter Full Name:</p>
                            <input type="text" value={formData.fullName} onChange={(e)=>setFormData({...formData,fullName:e.target.value})} placeholder='Eg. John Ani' required/>
                        </label>
                        
                        <label>
                            <p>Enter Email address:</p>
                            <input type="text" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} placeholder='example@gmail.com' required/>
                        </label>

                        <label>
                            <p>Enter Phone number:</p>
                            <input type="text" value={formData.phoneNumber} onChange={(e)=>setFormData({...formData,phoneNumber:e.target.value})} placeholder="07063448446" required/>
                        </label>

                        <label style={{ flexDirection: "column" }}>
                                <div style={{ display: "flex", width: "100%", height: "100%", justifyContent: "space-between", alignItems: "center" }}>
                                    <p>Confirm Phone no.:</p>
                                    <input type="text" value={formData.confirmPhoneNumber} onChange={(e)=>setFormData({...formData,confirmPhoneNumber:e.target.value})} placeholder="confirm phone number" required />
                                </div>
                                <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{confirmPhoneNumberError}</p>
                                
                            </label>
                            
                        <label>
                                <p>Enter Complete address information:</p>
                                <input type="text" value={formData.address} onChange={(e)=>setFormData({...formData,address:e.target.value})} placeholder="eg No. 28 Albert street Surulere Lagos state Nigeria" required />
                            </label>

                        <div className='TextAreaWrap'>
                            <p>Message:</p>
                            <textarea type="text" value={formData.message} onChange={(e)=>setFormData({...formData,message:e.target.value})} placeholder='Please enter your message here' required/>
                        </div>
                        <div className='SubmitButtonWrap'>
                           <button type="submit">Submit</button>
                        </div>
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
