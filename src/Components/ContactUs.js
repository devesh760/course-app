import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import '../App.css'

const Contactus = () =>{
    return (
      <div className="contact-us">
        <NavBar />
        <div className='image-bg'>
          
        </div>
        <div className="form-wrapper flex">
          <pre>
            "Get in Touch,
            <br /> We’ll make you a Believer."We’re here to help. Fill out the
            form and we’ll get back to you as soon as possible.
          </pre>
          <div>
            <h1
              style={{
                color: "#64686D",
                margin: "10px 0 20px 0",
                textAlign: "center",
              }}
            >
              Contact us
            </h1>
            <p style={{ flex: "1", textAlign: "center" ,color:'rgba(0,0,0,0.7)'}}>
              Our team would be happy to all your questions.
            </p>
          </div>
          <form>
            <div>
              <label>First Name(*)</label>
              <input type="text" />
            </div>
            <div>
              <label>Last Name(*)</label>
              <input type="text" />
            </div>
            <div>
              <label>Email(*)</label>
              <input type="text" />
            </div>
            <div>
              <label>Select Course</label>
              <select
                name="selelctcourse"
                aria-required="true"
                aria-invalid="false"
              >
                <option value="LingoQ Toddler">LingoQ Toddler</option>
                <option value="CodeQ Junior">CodeQ Junior</option>
                <option value="CodeQ Starter">CodeQ Starter</option>
                <option value="CodeQ Junior">CodeQ Junior</option>
                <option value="LingoQ Junior">LingoQ Junior</option>
                <option value="CodeQ Explorer">CodeQ Explorer</option>
                <option value="LingoQ Junior">LingoQ Junior</option>
                <option value="CodeQ Ethical Hacking">
                  CodeQ Ethical Hacking
                </option>
                <option value="CodeQ Senior">CodeQ Senior</option>
                <option value="LingoQ Explorer">LingoQ Explorer</option>
              </select>
            </div>
            <div>
                <label>Type your Text here</label>
                <textarea></textarea>
            </div>
            <div style={{display:'block'}}>
                <button style={{padding:'15px 25px', border:'none', background:'#185C98' , color:'#FFF', margin:'20px 0',borderRadius:'5px'}}>
                    SEND
                </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
}
export default Contactus;