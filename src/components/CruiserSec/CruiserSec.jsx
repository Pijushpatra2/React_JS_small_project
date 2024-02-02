import React, { Component } from 'react'
import "./style.css";
import image from "../../assets/DukatiCruise.png";

export default class CruiserSec extends Component {
  render() {
    return (
      <>
      <div className="main">
        <div className="CruiserCont">
            <div className="images">
                <img src={image} alt="" />
            </div>
            <div className='secContent'>
              <h3>Go as Curiosity takes You</h3>
              <p>The complate titanium exhaust system Ducati Performance made by Akrapovic is the best result off a collaboration</p>
              <button>view details</button>
            </div>
        </div>
      </div>
      </>
    )
  }
}
