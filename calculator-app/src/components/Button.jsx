import '../styles/Button.css'

function Button(props){

    const isOperator = val => {
        return isNaN(val) && (val != '.') && (val != '=');
    }

    return (
        <div
        className={`boton-contenedor ${isOperator(props.children) ? 'operador' : ''}`.trimEnd()}
        onClick={() => props.handleClick(props.children)}>
        {props.children}
      </div>
    )
}

export default Button