import React, { useContext } from 'react'
import "../CSS/TermsAndConditions.css"
import { Context } from './Contex'

const TermsAndConditions = () => {
  const {setShowTermsAndConditionsUI}=useContext(Context)
  return (
    <div className='TermsAndConditionsWrap'>
        <div className='TermsAndConditions'>
            <div className='TermsAndConditionsA'>
                Terms and conditions
            </div>
            <button onClick={()=>setShowTermsAndConditionsUI(false)}>Ok</button>
        </div>
    </div>
  )
}

export default TermsAndConditions

