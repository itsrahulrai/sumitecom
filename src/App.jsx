import React from "react";
import 'animate.css';
import Navbar from "./components/Navbar";
import Banner2 from "./components/Banner2";
import TopCategory from "./components/TopCategory";
import Card from "./components/Card";
import ProvidedServices from "./components/ProvidedServices";
import MiddleBanner from "./components/middlebanner";
import WelocomeMarquee from "./components/WelocomeMarquee";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgetPage from "./pages/ForgetPage";
import OtpPage from "./pages/OtpPage";
import ProductPopUp from "./components/ProductPopUp";
import ProductDetailPage from "./pages/ProductDetailPage";


const App = () => {
  return(
    <>
       <Navbar/>
      <Banner2/>
      <WelocomeMarquee/>
      <TopCategory/>
      <Card 
        cardtitle="Latest Selling Products" 
        cardsubtitle="Follow the most popular trends and get exclusive items from E-Store." 
      />
      <ProvidedServices/>
      <MiddleBanner/>
      <Card 
        cardtitle="Best Selling Products" 
        cardsubtitle="Follow the most popular trends and get exclusive items from E-Store." 
      />
      <WelocomeMarquee/>
      <Testimonial/>
      <Footer/>
      <LoginPage/> 
      <SignupPage/>
      <ForgetPage/>
      <OtpPage/>
      <ProductPopUp/>
       <ProductDetailPage/>
    </>
  )
}

export default App;
