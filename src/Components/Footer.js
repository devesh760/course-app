import React from 'react'
import '../App.css'
import {NavLink} from 'react-router-dom'
import { FiTwitter, FiFacebook, FiYoutube } from "react-icons/fi";
const Footer = () =>{
    return (
      <footer>
        {/* <div className="footer-nav">
          <NavLink exact to='/' activeClassName='active-route'>Home</NavLink>
          <NavLink to='/contact-us' activeClassName='active-route'>Contact us</NavLink>
          <NavLink to='/unset' activeClassName='active-route'>Terms Conditions</NavLink>
          <NavLink to='/unset' activeClassName='active-route'>Privacy Policy</NavLink>
        </div> */}
        <div className="social flex j-center a-center">
            <span><FiTwitter size={30}/></span>
            <span><FiFacebook size={30}/></span>
            <span><FiYoutube size={30}/></span>
        </div>
        <p style={{position:'relative',top:'30px',fontFamily:'Loto',color:'rgba(255,255,255,0.7)'}}>Copyright @2021. All rights reserved.</p>
      </footer>
    );
}

export default Footer;