import React, { useState,useEffect } from 'react'
import '../App.css'
const NavBar = () =>{
  let [visible,setVisible] = useState(false);
  let [show, setShow] = useState(false);
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
              src="https://ccinfo24.com/courses/wp-content/uploads/2021/07/cropped-Strong-3-1.png"
              alt="Logo"
            />
            <div className="a-s-center flex a-center">
              <a href="/">Home</a>
              <a href="/contact-us">Contact Us</a>
            </div>
            <i
              onClick={() => setVisible(!visible)}
              style={{ fontSize: "25px", cursor: "pointer", color: "#434343" }}
              className={[
                "a-s-center d-none",
                visible ? "fas fa-times" : "fas fa-bars",
              ].join(" ")}
            ></i>
          </nav>
        </header>
        <div style={styleForMobileNav} className="mobile-nav d-none">
          <a href="/">Home</a>
          <a href="/contact-us">Contact Us</a>
        </div>
      </>
    );
}

export default NavBar;