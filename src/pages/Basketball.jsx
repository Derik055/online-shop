import "./Basketball.css"
import PageHeader from "../Components/PageHeader/PageHeader";
import Product from "../Components/Product/Product";
import NewsLetter from "../Components/NewsLetter/NewsLetter"
import pr1 from "../assets/images/Basketball/pr1.jpg"
import pr2 from "../assets/images/Basketball/pr2.jpg"
import pr3 from "../assets/images/Basketball/pr3.jpg"
import pr4 from "../assets/images/Basketball/pr4.jpg"
import pr5 from "../assets/images/Basketball/pr5.jpg"
import pr6 from "../assets/images/Basketball/pr6.jpg"
import pr7 from "../assets/images/Basketball/pr7.jpg"
import pr8 from "../assets/images/Basketball/pr8.jpg"
import pr9 from "../assets/images/Basketball/pr9.jpg"
import pr10 from "../assets/images/Basketball/pr10.jpg"

function Basketball() {
  return (
    <>
      <PageHeader title="Basketball"/>

      <div className="Product-grid">
        <Product
          image={pr1}
          title={"Adidas Ownthegame 3.0"}
          price={120}
        />
        <Product
          image={pr2}
          title={"Adidas Cross EM Up Select"}
          price={120}
        />
        <Product
          image={pr3}
          title={"Adidas Pro 3.0"}
          price={99}
        />
        <Product
          image={pr4}
          title={"Adidas Snap Shooting Shirt"}
          price={80}
        />
        <Product
          image={pr5}
          title={"Nike Precision 6"}
          price={100}
        />
        <Product
          image={pr6}
          title={"Jordan Basketball Shoe"}
          price={120}
        />
        <Product
          image={pr7}
          title={"Nike Giannis Immortality 4"}
          price={130}
        />
        <Product
          image={pr8}
          title={"Puma Dagger"}
          price={100}
        />
        <Product
          image={pr9}
          title={"Puma All-Pro Nitro 2"}
          price={115}
        />
        <Product
          image={pr10}
          title={"Kobe Bryant LA Lakers Jersey"}
          price={250}
        />
      </div>
      <NewsLetter/>
    </>
  )
}

export default Basketball;
