import "./Button.css"

function Button({text}){
    return (
        <button className="Button">
            <span className="ButtonText">{text}</span>
            </button>
    )
}

export default Button