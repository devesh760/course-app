import React, {useRef,useState,useMemo,useEffect} from "react";
import "../App.css";
import Card from "./Cards/cardType1";
import NavBar from "./NavBar";
import ExploreSection from "./ExploreSection";
import Testimony from "./Testimony";
import Footer from "./Footer";
const Home = () => {
  return (
    <div
      style={{ position: "relative" }}
      className="Home"
    >
      <NavBar />
      <section className="section-1">
        {/* <img src="https://ccinfo24.com/courses/wp-content/uploads/2021/07/screen-post-folBYP0ED0k-unsplash-1-scaled.jpg" /> */}
        <div className="image-filter"></div>
        <div className="intro-info">
          <h1>Growth You Career With Complete Courses</h1>
          <p>
            Our Personalised Programs work to inspire every chapter of a child’s
            life. Join us now on this journey of fun and learning like many
            other students have!
          </p>
          <div className="btn-group">
            <a href="/home">READ MORE</a>
            <a href="/contact-us"> CONTACT US</a>
          </div>
        </div>
      </section>
      <section  className="section-2 flex j-center f-wrap">
        <Card icon_type="fas fa-language" title="Art Programs" />
        <Card icon_type="fas fa-language" title="Art Programs" />
        <Card icon_type="fas fa-language" title="Art Programs" />
      </section>
      <ExploreSection />
      <section style={{ padding: "80px 0" }} className="section-4">
        <h1 style={{ textAlign: "center", fontSize: "34px", color: "#64686D" }}>
          Why choose us
        </h1>
        <div
          style={{ margin: "20px 0 30px 0" }}
          className="star flex j-center a-center"
        >
          <span></span>
          <i className="fas fa-star"></i>
          <span></span>
        </div>
        <div className="wcu flex j-center f-wrap">
          <Card icon_type="fas fa-book" title="Personalised Curriculum" />
          <Card
            icon_type="fas fa-briefcase-medical"
            title="Flexible Time Sessions"
          />
          <Card icon_type="fas fa-football-ball" title="Regular Updates" />
          <Card
            icon_type="fas fa-globe-americas"
            title="1x1 Format for Kids, Group Format for Adults"
          />
          <Card
            icon_type="fas fa-car-side"
            title="Learn through Cartoons and Games"
          />
          <Card icon_type="fas fa-phone-alt" title="Regular Feedback" />
        </div>
      </section>
      <section style={{ padding: "80px 0" }} className="testimonial-section">
        <p>WHAT OUT CLIENTS SAY!</p>
        <h1>Testimonials</h1>
        <div className="star flex j-center a-center">
          <span></span>
          <i className="fas fa-star"></i>
          <span></span>
        </div>
        <div className="flex j-center f-wrap">
          <Testimony imgSrc="https://ccinfo24.com/courses/wp-content/uploads/2019/11/pexels-photo-91227-500x500-1-150x150.jpg" />
          <Testimony imgSrc="https://ccinfo24.com/courses/wp-content/uploads/2019/11/pexels-photo-769745-500x500-1-150x150.jpg" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
