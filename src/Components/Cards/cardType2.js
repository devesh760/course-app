import React from "react";
import "../../App.css";
import Aisrc from "../../Assets/ai.png";
import mssrc from "../../Assets/msoffice.png";
import gsuitesrc from "../../Assets/gsuite.png";

const CardType2 = ({title,icon}) => {
  return (
    <div className="card-container">
      <div className="cardType-2">
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
          <div  className="pricing-wrapper flex j-center">
            <div className="pricing flex j-center a-center">
              <p>1on1</p>
              <p>₹7380</p>
            </div>
            <div className="pricing flex j-center a-center">
              <p>Group</p>
              <p>₹5166</p>
            </div>
          </div>
          <button>Book Free Demo</button>
        </div>
        <div className="back flex j-center a-center">
          <div className="icon">
            <i className="fas fa-snowflake"></i>
          </div>
          <h1>Code Q Junior</h1>
          <p>Learn Symbolic and Block based Coding using Scratch</p>
        </div>
      </div>
    </div>
  );
};

export default CardType2;
