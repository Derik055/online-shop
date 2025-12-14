import React from "react";
import "./Home.css"
import HeroImage from "../assets/images/hero-image.jpg"
import LifestyleImage from "../assets/images/lifestyleImg.jpg"
import FootballImage from "../assets/images/Footballimg.jpg"
import BasketballImage from "../assets/images/basketballimg.jpg"
import Predators from "../assets/images/Preds.jpg"
import NikeTech from "../assets/images/NikeTech.jpg"
import AdidasShirt from "../assets/images/AdidasTshirt.jpg"
import PumaShirt from "../assets/images/PumaTshirt.jpg"
import Button from "../Components/Button/Button"
import CategoryCard from "../Components/CategoryCard/CategoryCard"
import ProductCard from "../Components/ProductCard/ProductCard"
import Newsletter from "../Components/Newsletter/Newsletter"
import { Link } from "react-router-dom"



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
            <Button text=" Shop Men" to="/men"/>
            <Button text=" Shop Women" to="/women"/>
        </div>
     </div>
    </div>
    </section>
    <section className="categories">
      <div className="category-header">
        <h1>Shop By Category</h1>
      </div>
      <div className="category-images">
        <CategoryCard
          title="Lifestyle"
          image={LifestyleImage}
          link="/lifestyle"
        />

        <CategoryCard
          title="Football"
          image={FootballImage}
          link="/football"
        />

        <CategoryCard
           title="Basketball"
          image={BasketballImage}
          link="/basketball"
        />
       </div>
    </section>

    <section className="new-arrivals">
  <div className="arrivals-header">
    <h1>New Arrivals</h1>
  </div>

  <div className="NewArrivalsImgs">
    <ProductCard
      image={Predators}
      title="Adidas Predator Elite"
    />
    <ProductCard
      image={NikeTech}
      title="Nike Tech Fleece"
    />
    <ProductCard
      image={AdidasShirt}
      title="Adidas Originals Teamgeist T-shirt"
    />
    <ProductCard
      image={PumaShirt}
      title="Puma Training Shirt"
    />
  </div>
</section>
    <Newsletter />
    </>
  )
}

export default Home;
