import React, { useState } from "react";
import "../../App.css";
import Aisrc from "../../Assets/ai.png";
import mssrc from "../../Assets/msoffice.png";
import gsuitesrc from "../../Assets/gsuite.png";
import {ImCross} from "react-icons/im"

const CardType2 = ({title,icon}) => {
  let [flip,setFlip] = useState(false)
  let style={
    transform:flip?"rotateY(180deg)":null
  }
  let flipCard = () =>{
    setFlip(!flip)
  }
  return (
    <div className="card-container">
      <div style={style} className="cardType-2">
        <div className="front">
          <div className="icon">
            <i className={icon}></i>
          </div>
          <h1>{title}</h1>
          <p>Learn to use computers and various</p>
          <div className="flex j-center">
            <p style={{ marginRight: "20px" }}>18 Sessions</p>
            <p>Age: 6 - 13</p>
          </div>
          <p>Fundamentals of Computers</p>
          <div className="icon-wrapper flex j-center">
            <img src={mssrc} />
            <img src={gsuitesrc} />
            <img src={Aisrc} />
          </div>
          <div className="pricing-wrapper flex j-center">
            <div className="pricing flex j-center a-center">
              <p>1on1</p>
              <p>₹7380</p>
            </div>
            <div className="pricing flex j-center a-center">
              <p>Group</p>
              <p>₹5166</p>
            </div>
          </div>
          <button
            style={{
              cursor: "pointer",
              boxShadow: "0 0 2px 0 rgba(0,0,0,0.4)",
            }}
            onClick={() => flipCard()}
          >
            Book Free Demo
          </button>
        </div>
        <div className="back flex j-center a-center">
          <span style={{ position: "absolute", top: "30px", right: "30px" }}>
            <ImCross style={{ cursor: "pointer" }} onClick={() => flipCard()} />
          </span>
          <div className="icon">
            <i className="fas fa-snowflake"></i>
          </div>
          <h1 style={{ color: "#FFB606" }}>Code Q Junior</h1>
          <p style={{ margin: "10px 0" }}>
            Learn Symbolic and Block based Coding using Scratch
          </p>
          <div style={{ marginTop: "50px" }} className="btn-group">
            <a style={{ display: "none" }}></a>
            <a href="/contact-us">CONTACT US</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardType2;
