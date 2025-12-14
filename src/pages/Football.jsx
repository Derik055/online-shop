import "./Football.css"
import PageHeader from "../Components/PageHeader/PageHeader";
import Product from "../Components/Product/Product";
import NewsLetter from "../Components/NewsLetter/NewsLetter"
import pr1 from "../assets/images/Football/pr1.jpg"
import pr2 from "../assets/images/Football/pr2.jpg"
import pr3 from "../assets/images/Football/pr3.jpg"
import pr4 from "../assets/images/Football/pr4.jpg"
import pr5 from "../assets/images/Football/pr5.jpg"
import pr6 from "../assets/images/Football/pr6.jpg"
import pr7 from "../assets/images/Football/pr7.jpg"
import pr8 from "../assets/images/Football/pr8.jpg"
import pr9 from "../assets/images/Football/pr9.jpg"
import pr10 from "../assets/images/Football/pr10.jpg"

function Football() {
  return (
    <>
      <PageHeader title="Football"/>

      <div className="Product-grid">
        <Product
          image={pr1}
          title={"Adidas Predator Elite "}
          price={120}
        />
        <Product
          image={pr2}
          title={"Adidas F50 Laceless"}
          price={120}
        />
        <Product
          image={pr3}
          title={"Adidas Copa"}
          price={100}
        />
        <Product
          image={pr4}
          title={"Nike Mercurial Vapor 16"}
          price={120}
        />
        <Product
          image={pr5}
          title={"Nike Tiempo Legend 10"}
          price={100}
        />
        <Product
          image={pr6}
          title={"Nike Air Mercurial Superfly"}
          price={120}
        />
        <Product
          image={pr7}
          title={"Nike Phantom 2"}
          price={120}
        />
        <Product
          image={pr8}
          title={"Puma Future 8"}
          price={100}
        />
        <Product
          image={pr9}
          title={"Puma Ultra"}
          price={120}
        />
        <Product
          image={pr10}
          title={"Puma Future 8"}
          price={120}
        />
      </div>
      <NewsLetter/>
    </>
  )
}

export default Football;
