import React from 'react';
import '../App.css'

const Testimony = ({imgSrc}) =>{
    return (
      <div className="mvt testimony flex">
          <div>
            <img
              style={{ borderRadius: "50%", marginRight: "15px" }}
              src={imgSrc}
            />
          </div>
          <div className="" style={{ textAlign: "left" }}>
            <p
              style={{ fontSize: "14px", color: "#7A7A7A", lineHeight: "22px" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesettine
              recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
            </p>
            <div
              className="stars"
              style={{ margin: "10px 0", color: "#FFB606" }}
            >
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <div style={{ color: "#272727" }} className="flex">
              <p>John Doe</p>
              <p style={{ fontStyle: "italic", marginLeft: "10px" }}>Codetic</p>
            </div>
          </div>
          <span
            style={{
              position: "absolute",
              top: "69%",
              right: "5%",
              fontSize: "2rem",
              color: "rgba(0,0,0,0.15)",
            }}
          >
            <i className="fas fa-quote-right"></i>
          </span>
      </div>
    );
}

export default Testimony;