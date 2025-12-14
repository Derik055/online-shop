import "./Lifestyle.css"
import PageHeader from "../Components/PageHeader/PageHeader";
import Product from "../Components/Product/Product";
import NewsLetter from "../Components/NewsLetter/NewsLetter"
import pr1 from "../assets/images/Lifestyle/pr1.jpg"
import pr2 from "../assets/images/Lifestyle/pr2.jpg"
import pr3 from "../assets/images/Lifestyle/pr3.jpg"
import pr4 from "../assets/images/Lifestyle/pr4.jpg"
import pr5 from "../assets/images/Lifestyle/pr5.jpg"
import pr6 from "../assets/images/Lifestyle/pr6.jpg"
import pr7 from "../assets/images/Lifestyle/pr7.jpg"
import pr8 from "../assets/images/Lifestyle/pr8.jpg"
import pr9 from "../assets/images/Lifestyle/pr9.jpg"
import pr10 from "../assets/images/Lifestyle/pr10.jpg"
import pr11 from "../assets/images/Lifestyle/pr11.jpg"
import pr12 from "../assets/images/Lifestyle/pr12.jpg"

function Lifestyle() {
  return (
    <>
      <PageHeader title="Lifestyle"/>

      <div className="Product-grid">
        <Product
          image={pr1}
          title={"Nike Court Sneakers"}
          price={95}
        />
        <Product
          image={pr2}
          title={"Adidas Polo Jacket"}
          price={75}
        />
        <Product
          image={pr3}
          title={"Nike Varsity Short Sleeve"}
          price={100}
        />
        <Product
          image={pr4}
          title={"Under Armour T-shirt"}
          price={24}
        />
        <Product
          image={pr5}
          title={"Nike Airforce 1"}
          price={100}
        />
        <Product
          image={pr6}
          title={"Adidas Run 72"}
          price={90}
        />
        <Product
          image={pr7}
          title={"Nike Shorts"}
          price={45}
        />
        <Product
          image={pr8}
          title={"Nike Crewneck Shirt"}
          price={65}
        />
        <Product
          image={pr9}
          title={"Nike Tech"}
          price={90}
        />
        <Product
          image={pr10}
          title={"Adidas Grand Court"}
          price={95}
        />
        <Product
          image={pr11}
          title={"New Balance 574"}
          price={100}
        />
          <Product
          image={pr12}
          title={"New Balance x Dave Fleece"}
          price={130}
        />
      </div>
      <NewsLetter/>
    </>
  )
}

export default Lifestyle;
