import React from "react";
import "./Home.css"
import HeroImage from "../assets/images/hero-image.jpg"
import LifestyleImage from "../assets/images/lifestyleImg.jpg"
import FootballImage from "../assets/images/Footballimg.jpg"
import BasketballImage from "../assets/images/basketballimg.jpg"
import Button from "../Components/Button/Button";

function Home() {
  return (
    <>
    <section className="home-hero">
    <div className="hero-image">
            <img src={HeroImage} alt="Teamgeist Collection"/>
        <div className="hero-overlay">
        <div className="hero-text">
            <h1>New Teamgeist Collection</h1>
            <p>
                Experience the return of an icon with the new Adidas Originals
                Teamgeist collection. With its signature curved lines, bold retro
                energy, and updated performance-inspired materials.
            </p>
        </div>
        <div className="buttons">
            <Button text=" Shop Men"/>
            <Button text=" Shop Women"/>
        </div>
     </div>
    </div>
    </section>
    <section className="categories">
      <div className="category-header">
        <h1>Shop By Category</h1>
      </div>
      <div className="category-images">
        <div className="lifestyle">
            <div className="lifestyleImage">
              <img src={LifestyleImage}/>
              <div className="lifestyleoverlay">
                <Button text="Shop"/>
              </div>
              <div className="lifestyle-header">
                Lifestyle
              </div>
            </div>
        </div>

        <div className="football">
          <div className="footballimage">
              <img src={FootballImage}/>
          <div className="footballoverlay">
                <Button text="Shop"/>
              </div>
              <div className="football-header">
                Football
              </div>
            </div>
        </div>

        <div className="basketball">
          <div className="basketballimage">
              <img src={BasketballImage}/>
          <div className="basketballoverlay">
                <Button text="Shop"/>
              </div>
              <div className="basketball-header">
                Basketball
              </div>
            </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default Home;
