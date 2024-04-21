import React, { useContext, useEffect } from 'react';
import Header from './component/Header';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './component/LandingPage';
import Footer from './component/Footer';
import ContactUs from './component/ContactUs';
import ScrollToTop from './component/ScrollToTop';
import BusinessWebsiteOffer from './component/BusinessWebsiteOffer';
import { useLocation } from 'react-router-dom';
import { Context } from './component/Contex';
import PortfolioWesiteOffer from './component/PortfolioWebsiteOffer';
import TermsAndConditions from './component/TermsAndConditions';
import FrontEndTrainingDetailPage from './component/FrontEndTrainingDetailPage';
import UIUXTrainingDetailPage from './component/UIUXTrainingDetailPage';
import Training from './component/Training';
import TrainingOnlyPage from './component/TrainingOnlyPage';
import SpecialOfferOnlyPage from './component/SpecialOfferOnlyPage';
import AboutUs from './component/AboutUs';

const App = () => {
  const {setActive}=useContext(Context)
  
  return (
    <div className='App'>
      <BrowserRouter>
        <ScrollToTop/>
        <Header/> 
          <Routes>
              <Route path = "/" element={<LandingPage/>}/>
              <Route path = "/contactus" element={<ContactUs/>}/>
              <Route path = "/bussinesswebsiteoffer" element={<BusinessWebsiteOffer/>}/>
              <Route path = "/portfoliowebsiteoffer" element={<PortfolioWesiteOffer/>}/>
              <Route path = "/forntendtrainingdetailpage" element={<FrontEndTrainingDetailPage/>}/>
              <Route path = "/uiuxtrainingdetailpage" element={<UIUXTrainingDetailPage/>}/>
              <Route path = "/trainingonlypage" element = {<TrainingOnlyPage/>}/>
              <Route path = "/specialofferonlypage" element = {<SpecialOfferOnlyPage/>}/>
              <Route path = "/aboutus" element={<AboutUs/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
