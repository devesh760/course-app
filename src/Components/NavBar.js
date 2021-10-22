import React, { useState,useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import '../App.css'
import Logo from "../Assets/Logo.png"
const NavBar = () =>{
  let [visible,setVisible] = useState(false);
  let [show, setShow] = useState(false);
  let history = useHistory();
  let styleForMobileNav = {
    display:visible?'flex':'none'
  }
  useEffect(() => {
    window.addEventListener('scroll',()=>{
      if (window.scrollY>20) {
        setShow(true);
      } else {
       setShow(false);
      }
    })
  },[]);
  let styleForNav = show
    ? {
      // transition: "all 0.4s",
        position: "fixed",
        top: "0px",
        height: "75px",
        zIndex: "10000",
        boxShadow: "0 0 10px 0 rgba(0,0,0,0.3)",
      }
    : null;
    return (
      <>
        <header style={styleForNav} className="header flex j-center a-center">
          <nav className="flex j-between">
            <img
              style={{ height: "75px", alignSelf: "center",cursor:'pointer' }}
              src={Logo}
              alt="Logo"
              onClick={()=>history.push("/")}
            />
            <div className="a-s-center flex a-center">
              <a href="/">
                Home
              </a>
              <hr />
              <a href="/contact-us">Contact Us</a>
            </div>
            <i
              onClick={() => setVisible(!visible)}
              style={{ fontSize: "25px", cursor: "pointer", color: "#434343" }}
              className={[
                "a-s-center",
                visible ? "fas fa-times" : "fas fa-bars",
              ].join(" ")}
            ></i>
          </nav>
        </header>
        <div style={styleForMobileNav} className="mobile-nav">
          <a href="/">Home</a>
          <a href="/contact-us">Contact Us</a>
        </div>
      </>
    );
}

export default NavBar;