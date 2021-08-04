import React from 'react'
import '../App.css'
import Card from './Cards/cardType2'
const ExploreSection = () =>{
    return (
      <section className="section-3 ">
        <h1>EXPLORE ONLINE CODING CLASSES FOR KIDS OF AGES 6-18</h1>
        <p>
          Building and programming immersive 3-D applications for the VR future
          is difficult, but we help make it easy!
        </p>
        <div className="star flex j-center a-center">
          <span></span>
          <i className="fas fa-star"></i>
          <span></span>
        </div>
        <div className="card-wrapper flex j-center f-wrap">
          <Card icon="fas fa-snowflake" title="Code Q Explorer"/>
          <Card icon="fas fa-sort-alpha-up" title="Front Title"/>
          <Card icon="fas fa-square-root-alt" title="Front Title"/>
        </div>
      </section>
    );
}

export default ExploreSection;