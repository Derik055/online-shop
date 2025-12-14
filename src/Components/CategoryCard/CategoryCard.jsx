import "./categoryCard.css";
import Button from "../Button/Button";

function CategoryCard({ title, image, link }) {
  return (
    <div className="category-card">
      <div className="category-image">
        <img src={image} alt={title} />

        <div className="category-overlay">
          <Button text="Shop" to={link} />
        </div>

        <div className="category-header">{title}</div>
      </div>
    </div>
  );
}

export default CategoryCard;
