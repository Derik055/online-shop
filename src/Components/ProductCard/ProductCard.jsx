import "./ProductCard.css";

function ProductCard({ image, title }) {
  return (
    <div className="Product">
      <div className="pr-img">
        <img src={image} alt={title} />
      </div>
      <div className="Pr-desc">
        {title}
      </div>
    </div>
  );
}

export default ProductCard;
