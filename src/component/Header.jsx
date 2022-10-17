import React from 'react';
import logo from '../images/logo5.jpg'

function Header() {
  return (
    <div>
         <div className="container">
        <div className="top-bar">
            <div className="col-nav">
                <div className="logo">
                    <img src={logo}  alt="logo"/>
                </div>
                <div className="menu">
                    
                    <a href="" ><span className="active">Home</span></a>
                    <a href=""><span>About US</span></a>
                    <a href=""><span>Blog</span></a>
                    <a href=""><span>Services</span></a>
                    <a href=""><span>Contact US</span></a>
               
                </div>
                <div className="clear"></div>
            </div>
            <div className="col-contact">
                <a href="tel:9521597830"><span>Call Us: 9521582333 </span></a>
            </div>
            <div className="clear"></div>
        </div>
    </div>
    </div>
  )
}

export default Header