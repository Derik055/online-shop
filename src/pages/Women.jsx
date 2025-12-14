import "./Women.css"
import PageHeader from "../Components/PageHeader/PageHeader";
import Product from "../Components/Product/Product";
import NewsLetter from "../Components/NewsLetter/NewsLetter"
import pr1 from "../assets/images/Women/pr1.jpg"
import pr2 from "../assets/images/Women/pr2.jpg"
import pr3 from "../assets/images/Women/pr3.jpg"
import pr4 from "../assets/images/Women/pr4.jpg"
import pr5 from "../assets/images/Women/pr5.jpg"
import pr6 from "../assets/images/Women/pr6.jpg"
import pr7 from "../assets/images/Women/pr7.jpg"

function Women() {
  return (
    <>
      <PageHeader title="Women"/>

      <div className="Product-grid">
        <Product
          image={pr1}
          title={"Nike Airforce 1"}
          price={100}
        />
        <Product
          image={pr2}
          title={"Adidas Campus"}
          price={120}
        />
        <Product
          image={pr3}
          title={"Puma shirt"}
          price={50}
        />
        <Product
          image={pr4}
          title={"Puma Training Shirt"}
          price={65}
        />
        <Product
          image={pr5}
          title={"Puma Running Shoe"}
          price={100}
        />
        <Product
          image={pr6}
          title={"Asics Training Shirt"}
          price={24}
        />
        <Product
          image={pr7}
          title={"Puma Speedcat"}
          price={110}
        />
      </div>
      <NewsLetter/>
    </>
  )
}

export default Women;
