import "./Product.css"

function Product({ image, title, price }) {
  return (
    <div className="product">
      <img src={image} alt={title} />
      <p className="price">${price}</p>
      <div className="title">{title}</div>
    </div>
  );
}

export default Product;
