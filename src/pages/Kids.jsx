import "./Kids.css"
import PageHeader from "../Components/PageHeader/PageHeader";
import Product from "../Components/Product/Product";
import NewsLetter from "../Components/NewsLetter/NewsLetter"
import pr1 from "../assets/images/Kids/pr1.jpg"
import pr2 from "../assets/images/Kids/pr2.jpg"
import pr3 from "../assets/images/Kids/pr3.jpg"
import pr4 from "../assets/images/Kids/pr4.jpg"
import pr5 from "../assets/images/Kids/pr5.jpg"
import pr6 from "../assets/images/Kids/pr6.jpg"
import pr7 from "../assets/images/Kids/pr7.jpg"

function Kids() {
  return (
    <>
      <PageHeader title="Kids"/>

      <div className="Product-grid">
        <Product
          image={pr1}
          title={"Puma Shoe"}
          price={95}
        />
        <Product
          image={pr2}
          title={"Puma Speedcat"}
          price={100}
        />
        <Product
          image={pr3}
          title={"Puma Indoor Football Shoe"}
          price={100}
        />
        <Product
          image={pr4}
          title={"Adidas Samba OG"}
          price={98}
        />
        <Product
          image={pr5}
          title={"Adidas Originals Shirt"}
          price={15}
        />
        <Product
          image={pr6}
          title={"Adidas Originals Shirt"}
          price={40}
        />
        <Product
          image={pr7}
          title={"Nike Shirt"}
          price={55}
        />
      </div>
      <NewsLetter/>
    </>
  )
}

export default Kids;
