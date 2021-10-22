import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import '../App.css'
import {useHistory} from 'react-router-dom'
import {Form,Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


const RedStar = ()=>{
  return <span style={{color:'red',fontSize:'1.1rem'}}> *</span>
}

const Contactus = () =>{
  let history = useHistory();

  function sendEmail(e){
    e.preventDefault();
    console.log(e.target);
  }
    return (
      <div className="contact-us">
        <NavBar />
        <div style={{ height: "500px", width: "100%" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://ccinfo24.com/courses/wp-content/uploads/2021/07/pawel-czerwinski-0xCCPIbl3M-unsplash-scaled.jpg"
            onClick={() => history.go("./")}
          />
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
                fontFamily: " 'Playfair Display', Sans-serif",
              }}
            >
              Contact us
            </h1>
            <p
              style={{
                flex: "1",
                textAlign: "center",
                color: "rgba(0,0,0,0.7)",
              }}
            >
              Our team would be happy to all your questions.
            </p>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First name</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="phone" placeholder="" />
            </Form.Group>

            <Form.Select size="md" className="mb-3 mt-4">
              <option>Large select</option>
              <option>Large select</option>
              <option>Large select</option>
              <option>Large select</option>
              <option>Large select</option>
            </Form.Select>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Type your Text here</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group>
              <Button
                style={{ background: "#1F1399", border: "none" }}
                variant="primary"
                type="submit"
                className='contact-btn'
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div>
        <Footer />
      </div>
    );
}
export default Contactus;