import "../styles/Button.css";

function Button({ text, buttonClick, actionClick}) {
    return (
        <button className={ buttonClick ? "boton-clic" : "boton-reiniciar" } onClick={ actionClick }>
            {text}
        </button>
    )
}

export default Button