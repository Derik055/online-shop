import "./Men.css"
import PageHeader from "../Components/PageHeader/PageHeader";
import Product from "../Components/Product/Product";
import NewsLetter from "../Components/NewsLetter/NewsLetter"
import pr1 from "../assets/images/Men/pr1.jpg"
import pr2 from "../assets/images/Men/pr2.jpg"
import pr3 from "../assets/images/Men/pr3.jpg"
import pr4 from "../assets/images/Men/pr4.jpg"
import pr5 from "../assets/images/Men/pr5.jpg"
import pr6 from "../assets/images/Men/pr6.jpg"
import pr7 from "../assets/images/Men/pr7.jpg"
import pr8 from "../assets/images/Men/pr8.jpg"
import pr9 from "../assets/images/Men/pr9.jpg"

function Men() {
  return (
    <>
      <PageHeader title="Men"/>

      <div className="Product-grid">
        <Product
          image={pr1}
          title={"Adidas Grand Court"}
          price={70}
        />
        <Product
          image={pr2}
          title={"Jordan Zip Up Hoodie"}
          price={120}
        />
        <Product
          image={pr3}
          title={"Jordan shorts"}
          price={50}
        />
        <Product
          image={pr4}
          title={"Nike Air T-shirt"}
          price={65}
        />
        <Product
          image={pr5}
          title={"Nike Air Training Shirt"}
          price={80}
        />
        <Product
          image={pr6}
          title={"Adidas Superstar Black"}
          price={100}
        />
        <Product
          image={pr7}
          title={"Adidas Superstar White"}
          price={100}
        />
        <Product
          image={pr8}
          title={"Asics Gel Kayano 14"}
          price={150}
        />
        <Product
          image={pr9}
          title={"Adidas Originals Zip Up Hoodie"}
          price={130}
        />
      </div>
      <NewsLetter/>
    </>
  )
}

export default Men;
