import React from 'react'
import '../App.css'
import {NavLink} from 'react-router-dom'

const Footer = () =>{
    return (
      <footer>
        <div className="footer-nav">
          <NavLink exact to='/' activeClassName='active-route'>Home</NavLink>
          <NavLink to='/contact-us' activeClassName='active-route'>Contact us</NavLink>
          <NavLink to='/unset' activeClassName='active-route'>Terms Conditions</NavLink>
          <NavLink to='/unset' activeClassName='active-route'>Privacy Policy</NavLink>
        </div>
        <div className="social flex j-center a-center">
            <span><i className='fab fa-facebook'></i></span>
            <span><i className='fab fa-twitter'></i></span>
            <span><i className='fab fa-youtube'></i></span>
        </div>
        <p>Copyright @2021. All rights reserved.</p>
      </footer>
    );
}

export default Footer;

