import React, { useContext } from 'react'
import "../CSS/TermsAndConditions.css"
import { Context } from './Contex'

const TermsAndConditions = () => {
  const {setShowTermsAndConditionsUI}=useContext(Context)
  return (
    <div className='TermsAndConditionsWrap'>
        <div className='TermsAndConditions'>
            <div className='TermsAndConditionsA'>
              <h3>Terms and Conditions</h3>
                  <div className='Article'>
                  <h4>Introduction</h4>

                  <p>These terms and conditions govern the provision of web development services by 
                  Digital Premium Tech. to clients. By engaging Digital Premium Tech's Services, the Client agrees 
                  to be bound by these terms and conditions.</p>
                  </div>

                  <div className='Article'>
                  <h4>Services</h4>

                  <p>Digital Premium Tech offers the services as mentioned on the web page 
                    https://digitalpremiumtech.vercel.app/. Digital Premium tech reserves the 
                    right to fullfill these services either directly or indirectly but will always 
                    do her best to see to the satisfaction of her clients. Digital Premium Tech may offer promotional
                    and special offers from time to time, 
                    subject to specific terms outlined at the time of the offer.</p>
                  </div>

                  <div className='Article'>
                  <h4>Payment</h4>
                  <p>The Client agrees to pay to Digital Premium Tech the mentioned amount for any chosen or selected service.</p>
                  </div>

                  <div className='Article'>
                  <h4>Project Delivery</h4>
                  <p>Digital Premium Tech will endeavor to completethe project within the agreed-upon time frame.</p>
                  <p>The client Acknowledges that delays in project completion may occur due to factors beyond the Developer's control, including but not limited to:
                  <br/>
                  Delayed provision of necessary materials or information by the Client,<br/>
                  Technical issues beyond the Developer's control<br/>
                  Force majeure events.</p>
                  </div>
                  
                  <button style={{height:"70px"}} onClick={()=>setShowTermsAndConditionsUI(false)}>Ok</button>
            </div>
            
        </div>
    </div>
  )
}

export default TermsAndConditions

