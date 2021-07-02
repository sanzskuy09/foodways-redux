import React, { Component } from "react";

import HeroImage from "../../Assets/image/hero-img.svg";
import Menu1 from "../../Assets/image/burger-king.jpg";
import Menu2 from "../../Assets/image/starbucks.jpg";
import Menu3 from "../../Assets/image/kfc.jpg";
import Menu4 from "../../Assets/image/jco.jpg";

import Resto1 from "../../Assets/image/geprek.png";
import Resto2 from "../../Assets/image/nasigoreng.png";
import Resto3 from "../../Assets/image/pecelayam.png";
import Resto4 from "../../Assets/image/kopikenangan.png";

export default class index extends Component {
  render() {
    return (
      <>
        <div className="hero-container">
          {/* Hero Section */}
          <section>
            <div className="hero-text">
              <h1>
                Are You Hungry ? <br />
                Express Home Delivery
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <img src={HeroImage} alt="Pizza" className="hero-img" />
          </section>
        </div>

        {/* Content Popular Restaurant */}
        <div className="container">
          <h2 className="h2">Popular Restaurant</h2>
          <div className="menu">
            <div className="menu-item">
              <img src={Menu1} alt="img" className="img-item" />
              <h3 className="h3">Burger King</h3>
            </div>
            <div className="menu-item">
              <img src={Menu2} alt="img" className="img-item" />
              <h3 className="h3">Starbucks</h3>
            </div>
            <div className="menu-item">
              <img src={Menu3} alt="img" className="img-item" />
              <h3 className="h3">KFC</h3>
            </div>
            <div className="menu-item">
              <img src={Menu4} alt="img" className="img-item" />
              <h3 className="h3">JCO</h3>
            </div>
          </div>
        </div>

        {/* Content Near Restaurant*/}
        <div className="container">
          <h2 className="h2">Rertaurant Near You</h2>
          <div className="near-restaurant">
            <div className="name-restaurant">
              <img src={Resto1} alt="img" className="img-restaurant" />
              <p className="title">Geprek Bensu</p>
              <p className="subtitle">0,2 KM</p>
            </div>
            <div className="name-restaurant">
              <img src={Resto2} alt="img" className="img-restaurant" />
              <p className="title">Nasi Goreng Mas Rony</p>
              <p className="subtitle">0,4 KM</p>
            </div>
            <div className="name-restaurant">
              <img src={Resto3} alt="img" className="img-restaurant" />
              <p className="title">Pecel Ayam Prambanan</p>
              <p className="subtitle">0,6 KM</p>
            </div>
            <div className="name-restaurant">
              <img src={Resto4} alt="img" className="img-restaurant" />
              <p className="title">Kopi Kenangan</p>
              <p className="subtitle">0,8 KM</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
