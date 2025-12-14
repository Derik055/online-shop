import { Link } from "react-router-dom";
import "./Button.css";

function Button({ text, to, onClick, type = "button" }) {
  if (to) {
    return (
      <Link to={to} className="Button">
        <span className="ButtonText">{text}</span>
      </Link>
    );
  }


  return (
    <button className="Button" type={type} onClick={onClick}>
      <span className="ButtonText">{text}</span>
    </button>
  );
}

export default Button;
